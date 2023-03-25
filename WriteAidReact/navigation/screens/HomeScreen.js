// import { useState } from 'react';
// import React, { Component } from 'react';
// import * as React from 'react';  

// import {View, Text, SafeAreaView, TouchableOpacity, Modal, Dimensions, StyleSheet, Image} from 'react-native';
// import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';
// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

// export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       localStream: null,
//       remoteStreamURL: null
//     };
//   }

//   async componentDidMount() {
//     //const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
//     const pc = new RTCPeerConnection(configuration);
  
//     const device = await mediaDevices.enumerateDevices();
    const camera = device.find(device => device.kind === 'videoinput');
// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

// export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       localStream: null,
//       remoteStreamURL: null
//     };
//   }

//   async componentDidMount() {
//     //const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
//     const pc = new RTCPeerConnection(configuration);
  
//     const device = await mediaDevices.enumerateDevices();
//     const camera = device.find(device => device.kind === 'videoinput');
  
//     const stream = await mediaDevices.getUserMedia({
//       audio: true,
//       video: { facingMode: 'user', deviceId: camera.deviceId },
//     });
//     pc.addStream(stream);
//     this.setState({localStream: stream.toURL()});
  
//     pc.onicecandidate = ({candidate}) => {
//       if (candidate) {
//         console.log(candidate);
//         // send the ice candidate to the remote peer
//       }
//     };
  
//     pc.onaddstream = ({stream}) => {
//       this.setState({remoteStreamURL: stream.toURL()});
//     };
  
//     const offer = await pc.createOffer();
//     await pc.setLocalDescription(offer);
  
//     // send the offer to the remote peer and wait for an answer
//     // ...
  
//     // once received, set the remote description
//     // ...
  
//     // and create an ice candidate
//     // ...
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <RTCView streamURL={this.state.localStream} style={{flex: 1}} />
//         <RTCView streamURL={this.state.remoteStreamURL} style={{flex: 1}} />
//       </View>
//     );
//   }
// }


//   /*
//   return (
//     <SafeAreaView
//       style={{margin: 10 }}>
//       <TouchableOpacity 
//         style={{ backgroundColor: '#00A89D', padding: 10, borderRadius: 15, height:'60%',  alignItems:'center', justifyContent: 'center' }}
//         onPress={() => ChangeModalVisible(true)}
        
//       >
//         <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 40, fontWeight:'bold' }}>+</Text>
//         <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 20 }}>New Stencil</Text>
//       </TouchableOpacity>
//       <Modal 
//         transparent={true}
//         animationType='fade'
//         visible={isModalVisible}
//         nRequestClose={() => ChangeModalVisible(false)}
//       >
//         <WhatTypeStencil
//           ChangeModalVisible={ChangeModalVisible}
//         />

//       </Modal>
      

//     </SafeAreaView>
//   );
// }

// */


import { useState, Component } from 'react';
import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Modal, Dimensions, StyleSheet, Image} from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

 

export default function HomeScreen({navigation}) { {

  
  return (
    <SafeAreaView
      style={{margin: 10 }}>
      <TouchableOpacity 
        style={{ backgroundColor: '#00A89D', padding: 10, borderRadius: 15, height:'60%',  alignItems:'center', justifyContent: 'center' }}
        onPress={() => ChangeModalVisible(true)}
        
      >
        <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 40, fontWeight:'bold' }}>+</Text>
        <Text style={{ color: '#fff', fontFamily:'Verdana', fontSize: 20 }}>New Stencil</Text>
      </TouchableOpacity>
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => ChangeModalVisible(false)}
      >
        <WhatTypeStencil
          ChangeModalVisible={ChangeModalVisible}
        />

      </Modal>
      

    </SafeAreaView>
  );
}
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  modal: {
      height: 150,
      width: Dimensions.get('window').width - 80,
      paddingTop: 10,
      backgroundColor:'#A8A8A8',
      borderRadius: 10,
  },
  textView: {
      flex: 1,
      alignItems: 'center',
  },
  text: {
      margin:5,
      fontSize:16,
      fontWeight:'bold'
  },
  buttonsView: {
    width:'100%',
    flexDirection: 'row',
  },
  touchableOpacity: {
    flex:1,
    paddingVertical:10,
    alignItems: 'center',
  }
})

