import cv2
import numpy as np
# Sort method to ensure that the order of the corners starts from the top left and goes clockwise
def sort(points):
    distances_to_origin = np.linalg.norm(points, axis=1)
    top_left_point = points[np.argmin(distances_to_origin)]
    # Create a list of the other points
    other_points = [p for p in points if not np.array_equal(p, top_left_point)]
    # Sort the list of other points by their angle with the x-axis
    other_points.sort(key=lambda p: np.arctan2(p[1] - top_left_point[1], p[0] - top_left_point[0]))
    # Return the sorted list of points
    return np.array([top_left_point] + other_points)


vid = cv2.VideoCapture(0)
# Sample stencil
src_img = cv2.imread("painting.jpg")
while(True):
    ret, frame = vid.read()
    framecopy = frame.copy()
    # Grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    # Gaussian blur
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    # Threshold
    #thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    #thresh = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 11, 2)
    ret, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    k = np.ones((3,3), np.uint8)
    # Apply the darkening kernel to the non-white pixels
    erode = cv2.erode(thresh, k, iterations = 1)
    # Apply morphology
    kernel = np.ones((7,7), np.uint8)
    morph = cv2.morphologyEx(erode, cv2.MORPH_CLOSE, kernel)
    morph = cv2.morphologyEx(morph, cv2.MORPH_OPEN, kernel)
    # Determine contours
    contours = cv2.findContours(morph, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    # Determine optimal contour
    maxInd = 0;
    maxArea = 0;
    contours = contours[0] if len(contours) == 2 else contours[1]
    for i in range(len(contours)):
        area = cv2.contourArea(contours[i]);
        if area > maxArea:
            maxArea = area;
            maxInd = i;
    # Find corners
    cv2.drawContours(frame, [contours[i]], 0, (255,255,255), -1)
    page = np.zeros_like(frame)
    cv2.drawContours(page, [contours[i]], 0, (255,255,255), -1)
    segment = cv2.arcLength(contours[i], True)
    corners = cv2.approxPolyDP(contours[i], 0.04 * segment, True)

    polygon = frame.copy()
    cv2.polylines(polygon, [corners], True, (0,0,255), 1, cv2.LINE_AA)
    pts_src = np.array([[0, 0], [src_img.shape[1] - 1, 0], [src_img.shape[1] - 1, src_img.shape[0] - 1], [0, src_img.shape[0] - 1]])
    result = frame
    # Displays the stencil if the contour is a quadrilateral
    if (len(corners)) == 4:
        # Sort points
        pts_dst = sort(corners.reshape(-1, 2)).reshape(4, 1, 2)
        # Find homography (perspective conversion) matrix
        mat, status = cv2.findHomography(pts_src, pts_dst)
        # Converts perspective
        warp = cv2.warpPerspective(src_img, mat, (frame.shape[1], frame.shape[0]))
        #ecv2.fillConvexPoly(framecopy, pts_dst, 0, 16)
        # Overlay the stencil
        result = framecopy + warp
        # Translucency
        alpha = 0.5

    # Performs the translucent overlay
        result = cv2.addWeighted(framecopy, 1 - alpha, warp, alpha, 0)

    cv2.imshow('frame',result)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

vid.release()
cv2.destroyAllWindows()
