import React, { useMemo } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/home";
import { BrowserRouter, useHistory, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes.js";
import { Cocktails } from "pages/Cocktails/Cocktails";
import { Articles } from "pages/Articles/Articles";
import { Header } from "components/Header/Header";
import { NavBar } from "components/Header/NavBar";
import { IntlProvider } from "react-intl";
import languages from "translations/translations";
import { flattenNestedObject } from "shared/DataUtils";
import { useSelector } from "react-redux";

const App = () => {
  const history = useHistory();
  const language = useSelector((store) => store.header.language);
  const flatLanguagues = useMemo(
    () => flattenNestedObject(languages[language]),
    [language]
  );
  return (
    <BrowserRouter history={history}>
      <IntlProvider
        locale="fr"
        defaultLocale="en-US"
        messages={flatLanguagues}
        textComponent={React.Fragment}
      >
        <NavBar isSidemenu></NavBar>
        <Header />
        <div className="App container mx-auto px-4 md:px-10 xl:px-16 2xl:px-16 bg-clip-content min-h-screen">
          <Switch>
            <Route
              exact
              path={ROUTES.HOME}
              render={() => <HomePage></HomePage>}
            />
            <Route exact path={ROUTES.COCKTAILS} render={Cocktails} />
            <Route exact path={ROUTES.ARTICLE} render={Articles} />
          </Switch>
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
