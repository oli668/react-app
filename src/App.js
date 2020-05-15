import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Button from "antd/es/button";

function App() {
  const { login } = useSelector(state => state.login);
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

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
      <Button type="primary">Button</Button>
      我是李佳来， 今天是{date.toLocaleTimeString()} {login}
    </div>
  );
}

export default App;
