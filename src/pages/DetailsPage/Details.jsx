import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider } from "components/Divider/Divider";
import { data } from "./data.js";
import { useIntl } from "react-intl";
import { productData } from "components/Card/data.js";
import { ProductCard } from "components/Card/ProductCard.jsx";

export const Details = (props) => {
  const params = useParams();
  const language = useSelector((store) => store.header.language).toLowerCase();
  const intl = useIntl();
  const {
    category,
    ingredients,
    garnish,
    description,
    mood,
    glass,
    weather,
    taste,
    step,
  } = data;
  return (
    <div className={"w-full mx-auto my-0 shadow-lg md:w-3/4 font-main_theme"}>
      {/* Details card */}
      <div className="">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full md:w-1/2 mt-8 mb-8">
            <div>
              <img
                className="m-auto w-3/4 shadow-lg group-hover:opacity-20 rounded-md max-w-sm flex opacity-100 h-auto transition: 0.5s ease-in-out"
                src={`https://7265-react-oli-8ggs2ctm06f2f6a4-1305182210.tcb.qcloud.la/cocktails-good/img-${params.id}.webp`}
                alt="none"
              />
              <div className="m-auto w-3/4 text-center pt-3">
                <span className="text-xl font-bold px-2">
                  {data.name[language]}
                </span>
                <span>{language === "ch" && data.name.us}</span>
              </div>
            </div>
            <div className="m-auto p-5">{description[language]}</div>
          </div>
          <div className="mt-0 mb-0 mx-5 w-full md:w-1/2 md:mt-8 md:mb-8 flex justify-between">
            <div className="w-full">
              <div className="flex justify-between md:flex-row">
                <div className="md:w-1/2 w-full">
                  <div className="font-bold text-lg mt-3">
                    {intl.formatMessage({ id: "DETAILS_DESCRIPTION" })}
                  </div>
                  <div className="flex mt-3">
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="px-3">{category[language]}</span>
                  </div>
                  <div className="flex mt-3">
                    <img
                      className="w-5"
                      alt="none"
                      src={require("./martini.png")}
                    />
                    <span className="px-3">{glass[language]}</span>
                  </div>
                  <div className="flex mt-3">
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="px-3">{mood[language]}</span>
                  </div>
                  <div className="flex mt-3">
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="px-3">{weather[language]}</span>
                  </div>
                  <div className="flex mt-3">
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <span className="px-3">{taste[language]}</span>
                  </div>
                </div>
                <div className="flex justify-between w-full md:1/2">
                  <div>
                    <div className="font-bold text-lg mt-3">
                      {intl.formatMessage({ id: "DETAILS_INGREDIENTS" })}
                    </div>
                    <div className="flex">
                      <div className="flex flex-col">
                        {ingredients.map((item, id) => {
                          return (
                            item.amount &&
                            item.unit && (
                              <li key={id} className="flex mt-3 list-disc">
                                <div>{item.amount}</div>
                                <div className="px-1">{item.unit}</div>
                              </li>
                            )
                          );
                        })}
                      </div>
                      <div className="flex flex-col w-full">
                        {ingredients.map((item, id) => {
                          return (
                            item.ingredient && (
                              <li key={id} className="flex mt-3 list-disc">
                                <div className="px-3 w-full text-left">
                                  {item.ingredient[language]}
                                </div>
                              </li>
                            )
                          );
                        })}
                      </div>
                    </div>
                    {ingredients.map((item, id) => {
                      return (
                        item.special && (
                          <li key={id} className="flex mt-3 list-disc">
                            <div className="w-full text-left">
                              {item.special[language]}
                            </div>
                          </li>
                        )
                      );
                    })}
                    {garnish && <div className="mt-3">{garnish[language]}</div>}
                  </div>
                </div>
              </div>
              <div className="font-bold text-lg mt-3">
                {intl.formatMessage({ id: "DETAILS_PREPATION" })}
              </div>
              <div className="mt-3">
                {step.map((item, key) => {
                  return (
                    <div key={key}>
                      {
                        <div className="py-3">
                          <span>{key + 1}</span> <span>{item[language]}</span>
                        </div>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* you might like to buy */}
      <div className="font-bold text-lg mt-3 mx-4">
        {intl.formatMessage({ id: "DETAILS_NEED" })}
      </div>
      <div className="flex flex-col md:flex-row">
        {productData.map((props) => (
          <div className="m-3">
            <ProductCard {...props}></ProductCard>
          </div>
        ))}
      </div>
      <Divider size="md"></Divider>
    </div>
  );
};
