import React from "react";
import { Card } from "components/Card/Card";
import { cardData } from "components/Card/data.js";

export const HomePage = () => {
  // Declare a new state variable, which we'll call "count"
  return (
    <div class="relative flex">
      {cardData.map((data, id) => {
        return <Card key={id} {...data} />;
      })}
    </div>
  );
};
