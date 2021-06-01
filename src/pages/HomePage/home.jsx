import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "components/Card/Card";
import { cardData } from "components/Card/data.js";
import { useIntl } from "react-intl";
import { Divider } from "components/Divider/Divider";
import { SayLove } from "pages/StartPage/StartPage";
import { tcbFetchCocktailsDetails } from "api/api";
import { saveCocktailsDetails } from "store/actions/cocktails.js";

const HomePage = () => {
  const intl = useIntl();
  const cocktailsDetails = useSelector((store) => store.cocktailsDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cocktailsDetails.length) {
      tcbFetchCocktailsDetails().then((res) => {
        dispatch(saveCocktailsDetails(res.result));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getHotCocktails = () => {
    return cardData
      .sort((a, b) => {
        return b.like - a.like;
      })
      .slice(0, 8);
  };
  const getSummerCocktails = () => {
    return cardData
      .sort((a, b) => {
        return b.like - a.like;
      })
      .slice(-8);
  };
  const getOtherAllCocktails = () => {
    return cardData
      .sort((a, b) => {
        return b.like - a.like;
      })
      .slice(8, -8);
  };
  return (
    <div>
      <Divider size="sm" />
      <SayLove></SayLove>
      <div>
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {intl.formatMessage({ id: "HOT_COCKTAILS" })}
        </div>
        <Divider size="xs" />
        <div className="w-3/4 my-0 mx-auto">
          <div className="relative inline-flex flex-wrap m-auto justify-evenly">
            {getHotCocktails().map((data, id) => {
              return <Card key={id} {...data} />;
            })}
          </div>
        </div>
      </div>
      <Divider size="sm" />
      <div>
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {intl.formatMessage({ id: "ENJOY_SUMMER" })}
        </div>
        <Divider size="xs" />
        <div className="w-3/4 my-0 mx-auto">
          <div className="relative inline-flex flex-wrap m-auto justify-evenly">
            {getSummerCocktails().map((data, id) => {
              return <Card key={id} {...data} />;
            })}
          </div>
        </div>
        <Divider size="sm" />
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {intl.formatMessage({ id: "All_COCKTAILS" })}
        </div>
        <Divider size="xs" />
        <div className="w-3/4 my-0 mx-auto">
          <div className="relative inline-flex flex-wrap m-auto justify-evenly">
            {getOtherAllCocktails().map((data, id) => {
              return <Card key={id} {...data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
