import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])
    
install("Flask")
install("pybase64")
install("opencv-python")
install("flask-cors")
#install("time")

from flask import Flask, jsonify, Response;
from flask_cors import CORS
import cv2
import numpy as np
import base64
import time

vid = cv2.VideoCapture(0)

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({"hello": "Word"})

#@app.route('/capture', methods = ['GET'])
def get_frame():
    ret, frame = vid.read()
        
    (flag, img_encode) = cv2.imencode(".jpg", frame)
    #data_encode = np.array(img_encode)
    byte_encode = img_encode.tobytes()
    yield(byte_encode)
    
    #yield (b'--frame\r\n'
               #b'Content-Type: image/jpeg\r\n\r\n' + byte_encode + b'\r\n')

@app.route('/video')
def video():
    #return {"TEST": str(time.localtime())}
    return get_frame()

if __name__ == "__main__":
    app.run(debug=True)
