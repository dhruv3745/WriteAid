//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import MainContainer from './navigation/MainContainer';

function App() {

  console.log("fefefewwaffefeefaefaeffe");
  //useEffect(() => {
    //const fetchData = async () => {fetch('/get.json')
        //.then((response) => response.json()).then(booksList => {this.setState({ books: booksList[0].run.data.metrics});};
   //const interval =  setInterval(() => {fetchData();},33);
    //return () => clearInterval(interval);
  //});
  const object = { "img_path": 'James Gordon' ,
  "coord_tuple": '[(9,9),(3,5),(3,1),(3,2)]' ,
  "stencil_path": 'bird.png'
};

  useEffect(() => {
    fetch("http://127.0.0.1:5000/process_frame", {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.text()).then(data => {console.log(data)});
    const interval = setInterval(() => {
      fetch("http://127.0.0.1:5000/video").then(response => response.text()).then(data => {console.log(data);});
    }, 66);
      return () => clearInterval(interval);
  }, []);

  //stream_data();
  //const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  //useEffect(() => {
    
  //});
  
  return(
    <MainContainer/>
  );
}


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
export default App;