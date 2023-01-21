import { useRef, useState, useEffect } from 'react';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({navigation}) {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMicPermission, setHasMicPermission] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const micPermission = await Camera.requestMicrophonePermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMicPermission(micPermission.status === "granted");
        })();
    }, []);

    if (hasCameraPermission===undefined) {
        return /*<Text>Requesting Camera Permissions....</Text>*/
    } else if (!hasCameraPermission) {
        return <Text>Camera Permissions Not Granted. Please change permissions in Settings to proceed. </Text>
    }

    return (
        <Camera style={styles.container} ref={cameraRef}>

        </Camera>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});