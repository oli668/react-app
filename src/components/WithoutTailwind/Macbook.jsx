import React from "react";
import "./public.css";

export const MacbookPro = () => {
  return (
    <div className="macbook">
      <div className="typing text-white mx-5 absolute top-5">
        Talk is cheap, show me your code!
      </div>
      <div className="typing-sec text-white mx-5 absolute top-5">
        闲话不多说 先上代码！
      </div>
      <div className="typing-thrid text-white mx-5 absolute top-5">
        {`#include <stdio.h> printf("咕噜铁汁") `}
      </div>
    </div>
  );
};
