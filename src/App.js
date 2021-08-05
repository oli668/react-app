import React, { useMemo, useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/home";
import { BrowserRouter, useHistory, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes.js";
import { Cocktails } from "pages/Cocktails/Cocktails";
import { Articles } from "pages/Articles/Articles";
import { IntroductionPage } from "pages/IntroductionPage/IntroductionPage";
import { Details } from "pages/DetailsPage/Details";
import { Header } from "components/Header/Header";
import { NavBar } from "components/Header/NavBar";
import { navItems, dropdownMenuList, subMenuMap } from "components/Header/data";
import { IntlProvider } from "react-intl";
import languages from "translations/translations";
import { flattenNestedObject } from "shared/DataUtils";
import { useSelector } from "react-redux";
import { loginCloudServer } from "api/api";
import { Divider } from "components/Divider/Divider";
import { CheckoutPage } from "pages/CheckoutPage/CheckoutPage";
import { FilterPage } from "pages/FilterPage/FilterPage";
import { Register } from "components/Register/Register";
const App = () => {
  const history = useHistory();
  const [isLogin, setLoginStatus] = useState();
  const language = useSelector((store) => store.header.language);
  const isUserLogin = useSelector((store) => store.header.isShowLoginModal);
  const showProject = false;
  const flatLanguagues = useMemo(
    () => flattenNestedObject(languages[language]),
    [language]
  );

  useEffect(() => {
    loginCloudServer().then((loginStatus) => {
      setLoginStatus(loginStatus);
    });
  }, []);
  return (
    <BrowserRouter history={history} className="overflow-auto">
      <IntlProvider
        locale="fr"
        defaultLocale="en-US"
        messages={flatLanguagues}
        textComponent={React.Fragment}
      >
        <NavBar
          isSidemenu
          navItems={navItems}
          dropdownMenuList={dropdownMenuList}
          subMenuMap={subMenuMap}
        ></NavBar>
        {isUserLogin && isLogin ? <Register></Register> : ""}
        {!showProject && <IntroductionPage></IntroductionPage>}
        {showProject && (
          <>
            <div className="fixed z-40 w-full">
              <Header />
            </div>
            <Divider></Divider>
            <div
              className={`App container mx-auto px-4 md:px-10 xl:px-16 2xl:px-16 bg-clip-content min-h-screen`}
            >
              <Divider size="sm" />
              <Switch>
                <Route
                  exact
                  path={ROUTES.HOME}
                  render={() => <HomePage></HomePage>}
                />
                <Route exact path={ROUTES.COCKTAILS} render={Cocktails} />
                <Route exact path={ROUTES.ARTICLE} render={Articles} />
                <Route
                  exact
                  path={`${ROUTES.DETAILS}/:id`}
                  render={() => <Details></Details>}
                />
                <Route
                  exact
                  path={ROUTES.CHECKOUT}
                  render={() => <CheckoutPage></CheckoutPage>}
                ></Route>
                <Route
                  exact
                  path={`${ROUTES.FILTER}/:id/:category/:random`}
                  render={() => <FilterPage></FilterPage>}
                ></Route>
              </Switch>
            </div>
          </>
        )}
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
