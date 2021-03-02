import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage/home";
import { BrowserRouter, useHistory, Switch, Route } from "react-router-dom";
import {} from "react-router-dom";
import { ROUTES } from "./routes.js";
import { Cocktails } from "pages/Cocktails/Cocktails";
import { Articles } from "pages/Articles/Articles";
import { Header } from "components/Header/Header";
import { NavBar } from "components/Header/NavBar";

const App = () => {
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <NavBar isSidemenu></NavBar>
      <Header />
      <div
        className="App"
        class="container mx-auto px-4 md:px-10 xl:px-16 2xl:px-16 bg-clip-content min-h-screen"
      >
        <Switch>
          <Route exact path={ROUTES.HOME} render={HomePage} />
          <Route exact path={ROUTES.COCKTAILS} render={Cocktails} />
          <Route exact path={ROUTES.ARTICLE} render={Articles} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
