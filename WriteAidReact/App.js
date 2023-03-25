//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import MainContainer from './navigation/MainContainer';


function App() {
  return(
    <MainContainer/>
  );
};


export default App;


/*
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import MainContainer from './navigation/MainContainer';

function App() {

  // console.log("fefefewwaffefeefaefaeffe");
  //useEffect(() => {
    //const fetchData = async () => {fetch('/get.json')
        //.then((response) => response.json()).then(booksList => {this.setState({ books: booksList[0].run.data.metrics});};
   //const interval =  setInterval(() => {fetchData();},33);
    //return () => clearInterval(interval);
  //});
  // const object = { "img_path": 'James Gordon' ,
  // "coord_tuple": '[(9,9),(3,5),(3,1),(3,2)]' ,
  // "stencil_path": 'bird.png'


  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/process_frame", {
  //     method: 'POST',
  //     body: JSON.stringify(object),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.text()).then(data => {console.log(data)});
  //   const interval = setInterval(() => {
  //     fetch("http://127.0.0.1:5000/video").then(response => response.text()).then(data => {console.log(data);});
  //   }, 66);
  //     return () => clearInterval(interval);
  // }, []);

  //stream_data();
  //const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  //useEffect(() => {
    
  //});
  
  return(
    <MainContainer/>
  );
};
// }


//function stream_data() {
  //console.log('REPEAT');
  //useEffect(() => {
//while (true) {
  //await sleep(33);
  //axios.get
 //fetch("http://127.0.0.1:5000/video").then(response => response.text().then(data => {console.log(data)})
 // }
 // )
//}, []);
  
//}
export default App;*/

/*
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localStream: null,
      remoteStreamURL: null
    };
  }

  async componentDidMount() {
    const configuration = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
    const pc = new RTCPeerConnection(configuration);
  
    const device = await mediaDevices.enumerateDevices();
    const camera = device.find(device => device.kind === 'videoinput');
  
    const stream = await mediaDevices.getUserMedia({
      audio: true,
      video: { facingMode: 'user', deviceId: camera.deviceId },
    });
    pc.addStream(stream);
    this.setState({localStream: stream.toURL()});
  
    pc.onicecandidate = ({candidate}) => {
      if (candidate) {
        console.log(candidate);
        // send the ice candidate to the remote peer
      }
    };
  
    pc.onaddstream = ({stream}) => {
      this.setState({remoteStreamURL: stream.toURL()});
    };
  
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
  
    // send the offer to the remote peer and wait for an answer
    // ...
  
    // once received, set the remote description
    // ...
  
    // and create an ice candidate
    // ...
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <RTCView streamURL={this.state.localStream} style={{flex: 1}} />
        <RTCView streamURL={this.state.remoteStreamURL} style={{flex: 1}} />
      </View>
    );
  }
}
*/