import cv2

textIn = "Hello how are you doing today"
textIn2 = "Hello how are you doing today. This is a new sentence to test if it wraps or not"
img = cv2.imread('whiteScreen.jpg', cv2.IMREAD_UNCHANGED)

charList = []
for character in textIn:
    charList.append(character)

print(charList)

if (len(charList) >= 26):
    # TODO add
    print("Hello")
    counter = -1
    index = 0
    quitLoop = False
    while True:
        tempList = []
        counter += 1
        for character in charList[index:]:
            quitLoop = False
            tempList.append(character)
            if character == " ":
                nextLength = 0
                for letter in charList[index + 1:]:
                    nextLength += 1
                    if letter == " ":
                        break
                if len(tempList) + nextLength > 26:
                    quitLoop = True

            index += 1
            if len(tempList) == 26 or index == len(charList) - 1 or quitLoop:
                break
            quitLoop = False

        if index == len(charList) - 1:
            break
        resultText = "".join(tempList)
        cv2.putText(img, resultText, (25, 35 + (counter * 50)), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0, 0, 0), 5, 2)


else:
    diff = (26 - len(charList))
    cv2.putText(img, textIn, (25, int(75 - (diff * 0.5))), cv2.FONT_HERSHEY_SIMPLEX, 1.2 + (diff * 0.08), (0, 0, 0), 5, 2)



#cv2.putText(img, textIn, (25,35), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (0,0,0), 2, 2)

cv2.imshow("Image",img)
cv2.imwrite("resultImage.jpg", img)
cv2.waitKey(0)
