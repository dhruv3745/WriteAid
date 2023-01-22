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

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://127.0.0.1:5000/video").then(response => response.text()).then(data => {console.log(data);});
    }, 33);
      return () => clearInterval(interval);
  }, []);

  //stream_data();
  //const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  //useEffect(() => {
    // Update the document title using the browser API
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