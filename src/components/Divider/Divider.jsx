import React from "react";

export const Divider = (props) => {
  const { size } = props;
  switch (size) {
    case "xs":
      return <div className="w-full h-4"></div>;
    case "sm":
      return <div className="w-full h-8"></div>;
    case "md":
      return <div className="w-full h-16"></div>;
    case "lg":
      return <div className="w-full h-28"></div>;
    default:
      return <div className="w-full h-20"></div>;
  }
};
