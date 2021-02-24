import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { HomePage } from "./pages/HomePage/home";
import { BrowserRouter, useHistory, Switch, Route } from "react-router-dom";
import {} from "react-router-dom";
import { ROUTES } from "./routes.js";
import { Cocktails } from "pages/Cocktails/Cocktails";
import { Articles } from "pages/Articles/Articles";
import { Header } from "components/Header/Header";
const App = () => {
  const { login } = useSelector((state) => state.login);
  const [date, setDate] = useState(new Date());
  const history = useHistory();
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
    <BrowserRouter history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME} render={HomePage} />
          <Route exact path={ROUTES.COCKTAILS} render={Cocktails} />
          <Route exact path={ROUTES.ARTICLE} render={Articles} />
        </Switch>
        今天是{date.toLocaleTimeString()} {login}
      </div>
    </BrowserRouter>
  );
};

export default App;
