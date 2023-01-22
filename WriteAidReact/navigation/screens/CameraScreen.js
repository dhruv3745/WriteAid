import { useRef, useState, useEffect } from 'react';
import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Overlay} from 'react-native';
import { Camera } from 'expo-camera';
import Draggable from 'react-native-draggable';

export default function CameraScreen({navigation}) {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMicPermission, setHasMicPermission] = useState();

    let circleTLX = Dimensions.get('window').width/2-75;
    let circleTLY = Dimensions.get('window').height/2-75;
    let circleTRX = Dimensions.get('window').width/2+75;
    let circleTRY = Dimensions.get('window').height/2-75;
    let circleBRX = Dimensions.get('window').width/2+75;
    let circleBRY = Dimensions.get('window').height/2+75;
    let circleBLX = Dimensions.get('window').width/2-75;
    let circleBLY = Dimensions.get('window').height/2+75;

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const micPermission = await Camera.requestMicrophonePermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMicPermission(micPermission.status === "granted");
        })();
    }, []);

    

    const sendLocationsofRectangle = (cornerNumber, xval, yval) => { 

        switch (cornerNumber) {
            case 1:
              circleTLX = xval;
              circleTLY = yval
              break;
            case 2:
                circleTRX = xval;
                circleTRY = yval
              break;
            case 3:
                circleBRX = xval;
                circleBRY = yval
              break;
            case 4:
                circleBLX = xval;
                circleBLY = yval
              break;
          }

          console.log(circleTLX, circleTLY, circleTRX, circleTRY, circleBRX, circleBRY, circleBLX, circleBLY);
          
    }

    if (hasCameraPermission===undefined) {
        return /*<Text>Requesting Camera Permissions....</Text>*/
    } else if (!hasCameraPermission) {
        return <Text>Camera Permissions Not Granted. Please change permissions in Settings to proceed. </Text>
    }

    let integ = 0;

    async function check() {

        
        
        console.log(integ++);
        // setTimeout(check, 600);
      }
      
      // Write this line

      const callFunction = true;
      

      const checkCalls = () => {
        setInterval(check,1000);
      }

      checkCalls();

      clearInterval(check);

      const [imageUri, setImageUri] = useState(null);

  // Function to fetch the image from the file location
  const fetchImage = async () => {
    const response =  fetch('WriteRightLogo.png');
    const blob =  response.blob();
    const imageUri = URL.createObjectURL(blob);
    setImageUri(imageUri);
  };

    return (
        // <Camera style={styles.camera} ref={cameraRef}>

        
        

        <View opacity = {.7}>
        {/* <Draggable x={75} y={100} renderSize={56} renderColor='white' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/>  */}
        {/* <Draggable x={200} y={300} renderColor='red' renderText='B'/> */}
        {/* <Draggable/> */}
        
        <View>
      <Button title="Fetch Image" onPress={fetchImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>

        <Draggable x={-75} y={-75} touchableOpacityProps={0.2} renderSize={30} renderColor='orange' renderText='+' isCircle onDragRelease={(e) => sendLocationsofRectangle(1 ,e.nativeEvent.pageX - e.nativeEvent.locationX, e.nativeEvent.pageY - e.nativeEvent.locationY)}/>
        <Draggable x={75} y={-75} touchableOpacityProps={0.2} renderSize={30} renderColor='orange' renderText='+' isCircle onDragRelease={(e) => sendLocationsofRectangle(2 ,e.nativeEvent.pageX - e.nativeEvent.locationX, e.nativeEvent.pageY - e.nativeEvent.locationY)}/>
        <Draggable x={75} y={75} touchableOpacityProps={0.2} renderSize={30} renderColor='orange' renderText='+' isCircle onDragRelease={(e) => sendLocationsofRectangle(3 ,e.nativeEvent.pageX - e.nativeEvent.locationX, e.nativeEvent.pageY - e.nativeEvent.locationY)}/>
        <Draggable x={-75} y={75} touchableOpacityProps={0.2} renderSize={30} renderColor='orange' renderText='+' isCircle onDragRelease={(e) => sendLocationsofRectangle(4 ,e.nativeEvent.pageX - e.nativeEvent.locationX, e.nativeEvent.pageY - e.nativeEvent.locationY)}/>
    </View>


        // </Camera>
    ) ;

    // return(
    //     <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //         <Text 
    //             onPress={() => navigation.navigate('Home')}
    //             style = {{fontSize :26, fontWeight : 'bold'}}>Details Screen</Text>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});