import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

 //Replaces componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      我是李佳来， 今天是{date.toLocaleTimeString()}
    </div>
  );
}

export default App;
