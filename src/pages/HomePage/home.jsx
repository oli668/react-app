import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "components/Card/Card";
import { cardData } from "components/Card/data.js";
import { useIntl } from "react-intl";
import { SearchBar } from "components/Header/SearchBar";
import { Divider } from "components/Divider/Divider";
import { tcbFetchAllCocktails } from "api/api";
import { saveCocktails } from "store/actions/cocktails.js";

const HomePage = () => {
  const intl = useIntl();
  const cocktails = useSelector((store) => store.cocktails);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!cocktails.length) {
    //   tcbFetchAllCocktails().then((res) => {
    //     console.log(res);
    //     dispatch(saveCocktails(res.result.res.data));
    //   });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cocktails);
  return (
    <div className="">
      <Divider />
      <div className="w-3/4 my-0 mx-auto">
        <SearchBar></SearchBar>
      </div>
      <Divider size="sm" />
      <div>
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {intl.formatMessage({ id: "HOT_COCKTAILS" })}
        </div>
        <Divider size="xs" />
        <div className="w-3/4 my-0 mx-auto">
          <div className="relative inline-flex flex-wrap m-auto justify-evenly">
            {cardData.map((data, id) => {
              return <Card key={id} {...data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
