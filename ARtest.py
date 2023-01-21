import cv2
import numpy as np

vid = cv2.VideoCapture(0)
while(True):
    ret, frame = vid.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (3,3), 0)
    otsu = cv2.threshold(blur, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)[1]
    kernel = np.ones((7,7), np.uint8)
    morph = cv2.morphologyEx(otsu, cv2.MORPH_CLOSE, kernel)
    morph = cv2.morphologyEx(morph, cv2.MORPH_OPEN, kernel)
    contours = cv2.findContours(otsu, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    maxInd = 0;
    maxArea = 0;

    contours = contours[0] if len(contours) == 2 else contours[1]
    for i in range(len(contours)):
        area = cv2.contourArea(contours[i]);
        if area > maxArea:
            maxArea = area;
            maxInd = i;
    cv2.drawContours(frame, [contours[i]], 0, (255,255,255), -1)
    page = np.zeros_like(frame)
    cv2.drawContours(page, [contours[i]], 0, (255,255,255), -1)

    segment = cv2.arcLength(contours[i], True)
    corners = cv2.approxPolyDP(contours[i], 0.04 * segment, True)
    polygon = frame.copy()
    cv2.polylines(polygon, [corners], True, (0,0,255), 1, cv2.LINE_AA)

    cv2.imshow('frame',polygon)
    print(corners)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

vid.release()
cv2.destroyAllWindows()
