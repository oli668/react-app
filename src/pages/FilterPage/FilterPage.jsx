/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card } from "components/Card/Card";
import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";
import { Divider } from "components/Divider/Divider";
import { decrypt } from "shared/DataUtils.js";
import { liquors, tastes, type } from "./data.js";
const SearchTitle = () => {
  const intl = useIntl();
  const params = useParams();
  const language = useSelector((store) => store.header.language).toLowerCase();
  return (
    <>
      {params.id === "liqours" && (
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          <span>
            {language === "ch" && (
              <span className="">{liquors[params.category]}</span>
            )}
            {intl.formatMessage({ id: "BASED_ON" })}
            {language === "us" && (
              <span className="ml-2">{params.category}</span>
            )}
          </span>
        </div>
      )}
      {params.id === "tastes" && (
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {language === "ch" && (
            <span className="">{tastes[params.category]}</span>
          )}
          {language === "us" && <span className="mr-2">{params.category}</span>}
          <span>{intl.formatMessage({ id: "Taste" })}</span>
        </div>
      )}
      {params.id === "categories" && (
        <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
          {language === "ch" && (
            <span className="">{type[params.category]}</span>
          )}
          {language === "us" && <span className="">{params.category}</span>}
        </div>
      )}
    </>
  );
};

export const FilterPage = () => {
  const intl = useIntl();
  const history = useHistory();
  const [currentCocktails, setCurrentCocktails] = useState([]);
  const cocktailsDetails = useSelector((store) => store.cocktailsDetails);
  const filterCocktails = useSelector((store) => store.filterCocktails);

  useEffect(() => {
    if (!cocktailsDetails.length) {
      history.push("/");
      return;
    }
    const data = decrypt(cocktailsDetails);
    let filteredSpiritCocktails = data;
    if (filterCocktails.type === "liqours") {
      filteredSpiritCocktails = data.filter((item) => {
        for (let spirit of item.spirits) {
          if (spirit.id === filterCocktails.id) return true;
        }
        return false;
      });
    } else if (filterCocktails.type === "tastes") {
      filteredSpiritCocktails = data.filter((item) => {
        for (let taste of item.taste.id) {
          if (taste === filterCocktails.id) return true;
        }
        return false;
      });
    } else if (filterCocktails.type === "categories") {
      filteredSpiritCocktails = data.filter((item) => {
        return item.category.id === filterCocktails.id;
      });
    }
    setCurrentCocktails(filteredSpiritCocktails);
  }, [filterCocktails.id]);

  return (
    <div>
      <Divider size="sm" />
      {currentCocktails.length > 0 ? (
        <>
          <SearchTitle />
          <div className="w-3/4 my-0 mx-auto">
            <div className="relative inline-flex flex-wrap m-auto justify-evenly">
              {currentCocktails.map((data, id) => {
                return <Card key={id} {...data} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
            {intl.formatMessage({ id: "SORRY_FOUND" })}
          </div>
          <div className="w-3/4 my-0 mx-auto text-2xl font-semibold">
            {intl.formatMessage({ id: "UPDATE_DATABASE" })}
          </div>
        </>
      )}
    </div>
  );
};
