from flask import Flask, jsonify;
import cv2

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({"hello": "Word"})

if __name__ == "__main__":
    app.run(debug=True)
