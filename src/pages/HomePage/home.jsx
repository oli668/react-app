import React from "react";
import { Card } from "components/Card/Card";
import { cardData } from "components/Card/data.js";
import { useIntl } from "react-intl";
import { SearchBar } from "components/Header/SearchBar";
import { Divider } from "components/Divider/Divider";
const HomePage = () => {
  const intl = useIntl();
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
