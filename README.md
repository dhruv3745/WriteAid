# WriteAid
This program allows users to learn how to write or draw with AR style stensils. The stensil is laid on something like a piece of paper through a camera, and the user can
adjust the placement of the stensil. The user can follow along, learning how to write or draw. Users can enter text in any languge, which is then translated to 
english and made into a stensil. Users can also upload their own images to be used as stensils. This app can be used to teach people how to write in english or draw!


![Screenshot](WriteRightLogo.png)



# Technologies

## FRONTEND:

   React Native: 
We used React Native to display the App. We had 3 Main Screens: Home, Camera, and Settings. The Home Screen allowed you to input an Image to turn into a stencil using opencv. The Other option is to enter text or speak into the microphone to create a stencil based off of the text. 

## BACKEND

   Flask and Python:
We used a Flask Server with python code to create a backend processing for the images and texts. 

## AR Technologies
We utilized a variety of opencv filters as well as a script to locate corners.


## Dependencies
Googletrans - 'pip install googletrans==4.0.0rc1'

Opencv - 'pip install opencv-python'

https://www.youtube.com/watch?v=5MU0R5uiVro
