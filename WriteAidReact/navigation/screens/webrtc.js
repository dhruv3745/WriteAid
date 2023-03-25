// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

// export default class webrtc extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       localStream: null,
//       remoteStreamURL: null
//     };
//   }

//   async componentDidMount() {
//     const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
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
