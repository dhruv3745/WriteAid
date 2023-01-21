import * as React from 'react';
import MainContainer from './navigation/MainContainer';

function App() {

  // setInterval(stream_data, 33);
  // const [count, setCount] = useState(0);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  // });

  return(
    <MainContainer/>
  );
}

// async function stream_data() {
//   console.log('ER');
//   fetch("/capture").then(
//     res => res.json()
//   )
// }
export default App;