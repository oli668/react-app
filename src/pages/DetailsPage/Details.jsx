import React from "react";
import { useParams } from "react-router-dom";
export const Details = (props) => {
  const params = useParams();
  return <>{params.id}</>;
};
