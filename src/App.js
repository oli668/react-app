/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/home";
import { BrowserRouter, useHistory, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes.js";
import { Cocktails } from "pages/Cocktails/Cocktails";
import { Articles } from "pages/Articles/Articles";
import { IntroductionPage } from "pages/IntroductionPage/IntroductionPage";
import { Footer } from "pages/Footer/Footer";
import { Details } from "pages/DetailsPage/Details";
import { Header } from "components/Header/Header";
import { NavBar } from "components/Header/NavBar";
import { IntlProvider } from "react-intl";
import languages from "translations/translations";
import { flattenNestedObject } from "shared/DataUtils";
import { useSelector, useDispatch } from "react-redux";
import { loginCloudServer } from "api/api";
import { Divider } from "components/Divider/Divider";
import { CheckoutPage } from "pages/CheckoutPage/CheckoutPage";
import { FilterPage } from "pages/FilterPage/FilterPage";
import { Register } from "components/Register/Register";
import { tcbFetchCocktailsDetails } from "api/api";
import { saveCocktailsDetails } from "store/actions/cocktails.js";
import { toggleSidemenu } from "store/actions/header";
import {
  IntroductionPageNavItems,
  navItems,
  dropdownMenuList,
  subMenuMap,
} from "components/Header/data";
const App = () => {
  const history = useHistory();
  const [isLogin, setLoginStatus] = useState();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.header.language);
  const isUserLogin = useSelector((store) => store.header.isShowLoginModal);
  const cocktailsDetails = useSelector((store) => store.cocktailsDetails);

  const isShowCocktails = useSelector(
    (store) => store.header.isShowCocktailsPage
  );
  const { isShowSidemenu } = useSelector((store) => {
    return store.header;
  });
  const flatLanguagues = useMemo(
    () => flattenNestedObject(languages[language]),
    [language]
  );

  useEffect(() => {
    tcbFetchCocktailsDetails().then((res) => {
      dispatch(saveCocktailsDetails(res.result));
    });
  }, []);

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
        {isShowCocktails && (
          <NavBar
            isSidemenu
            navItems={navItems}
            dropdownMenuList={dropdownMenuList}
            subMenuMap={subMenuMap}
            textColor="text-white"
          ></NavBar>
        )}
        {!isShowCocktails && (
          <NavBar
            isSidemenu
            navItems={IntroductionPageNavItems}
            textColor="text-white"
          ></NavBar>
        )}
        {isUserLogin && isLogin ? <Register></Register> : ""}
        {
          <>
            {isShowCocktails && (
              <div>
                <div className="fixed z-40 w-full">
                  <Header />
                </div>
                <Divider></Divider>
              </div>
            )}
            {!isShowCocktails && (
              <div>
                <div className="fixed z-40 w-full">
                  <div className="flex w-full justify-end md:hidden">
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(toggleSidemenu());
                      }}
                      className={`${
                        !isShowSidemenu ? "visible" : "invisible"
                      } mr-14 mt-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:none`}
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div
              className={`${
                isShowCocktails
                  ? "App container mx-auto px-4 md:px-10 xl:px-16 2xl:px-16 bg-clip-content min-h-screen"
                  : ""
              }`}
            >
              {isShowCocktails && <Divider size="sm" />}
              <Switch>
                <Route
                  exact
                  path={["/", "/join", "/missions"]}
                  render={() => (
                    <div className="font-main_theme">
                      <IntroductionPage></IntroductionPage>
                    </div>
                  )}
                ></Route>
                <Route
                  exact
                  path={ROUTES.HOME}
                  render={() =>
                    cocktailsDetails.length && <HomePage></HomePage>
                  }
                />
                <Route exact path={ROUTES.COCKTAILS} render={Cocktails} />
                <Route exact path={ROUTES.ARTICLE} render={Articles} />
                <Route
                  exact
                  path={`${ROUTES.DETAILS}/:id`}
                  render={() => cocktailsDetails.length && <Details></Details>}
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
            <Footer
              footerStyle={{ color: "bg-blue-dark", textColor: "text-white" }}
            ></Footer>
          </>
        }
      </IntlProvider>
    </BrowserRouter>
  );
};

export default App;
