/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { decrypt } from "shared/DataUtils.js";
import { pinyin } from "pinyin-pro";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { ROUTES } from "routes.js";

const LoaderIcon = () => {
  return (
    <svg
      className="icon-loader"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="spinner-circle" cx="50" cy="50" r="45" />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const SearchBar = () => {
  const history = useHistory();
  const [currInput, setCurrInput] = useState("");
  const [results, setResults] = useState([]);
  const [founded, setFounded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const cocktailsDetails = useSelector((store) => store.cocktailsDetails);
  const language = useSelector((store) => store.header.language).toLowerCase();
  const data = cocktailsDetails.length > 0 ? decrypt(cocktailsDetails) : [];
  const intl = useIntl();
  const debounceSearch = useRef(
    debounce((currInput) => {
      searchFromCocktailsData(currInput).then((results) => {
        setIsSearching(false);
        setResults(results);
      });
    }, 1000)
  );
  const onkeyPress = (e) => {
    if (results.length > 0 && e.keyCode === 13) {
      history.push(`${ROUTES.DETAILS}/${results[0].id}`);
      setFounded(true);
      setResults([]);
    }
  };
  const parseStringHtml = (str, originTerm) => {
    const term = originTerm.toLowerCase();
    const str1 =
      str[language] &&
      str[language].replace(
        new RegExp(term, "gi"),
        (match) => `<b>${match}</b>`
      );
    const delim = `<b>${term}</b>`;
    const newstring = str1.split(delim);
    const res = [];
    const len = newstring.length;
    for (let i = 0; i < len; i++) {
      res.push(newstring[i]);
      if (i !== len - 1)
        res.push(
          <b key={i} className="text-warning">
            {term}
          </b>
        );
    }
    return res;
  };

  const searchFromCocktailsData = (inputStr) => {
    let result = [];
    const promise = new Promise((resolve) => {
      result = data
        .filter((item) => {
          return (
            item.name["us"].toLowerCase().includes(inputStr) ||
            item.name["ch"].toLowerCase().includes(inputStr) ||
            pinyin(item.name["ch"], { toneType: "none" })
              .toLowerCase()
              .split(" ")
              .join("")
              .includes(inputStr)
          );
        })
        .map((item) => {
          return {
            id: item._id,
            name: {
              ch: item.name["ch"],
              us: item.name["us"],
            },
          };
        });
      resolve(result);
    });
    return promise;
  };

  useEffect(() => {
    if (currInput.length >= 2) {
      setIsSearching(true);
      debounceSearch.current(currInput);
    }
  }, [currInput]);

  return (
    <div className="pt-0 w-full relative">
      <div
        className={`${
          results.length > 0 ? "rounded-b-none rounded-bl-none" : ""
        } flex items-center rounded-md shadow-lg h-11`}
      >
        <input
          className="rounded-md w-full text-black-light leading-tight p-3 focus:outline-none"
          id="search"
          type="text"
          value={currInput}
          autoComplete="off"
          onFocus={() => {
            setResults([]);
          }}
          onKeyDown={(e) => onkeyPress(e)}
          onChange={(e) => {
            setFounded(false);
            setCurrInput(e.target.value.toLowerCase());
          }}
          onBlur={() => {
            setCurrInput("");
          }}
          placeholder="Search"
        />
        <div className="p-4">
          <button className="text-white rounded-full p-2 focus:outline-none w-10 md:h10 h6 flex items-center justify-center">
            {isSearching ? <LoaderIcon /> : <SearchIcon />}
          </button>
        </div>
      </div>
      <Transition
        show={currInput.length >= 2}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full md:w-full bg-gray flex shadow-sm items-center absolute z-50">
          <div className="w-full">
            {results.length > 0 &&
              results.slice(0, 10).map((item, id) => {
                return (
                  <li
                    key={id}
                    onClick={() => history.push(`${ROUTES.DETAILS}/${item.id}`)}
                    className="cursor-pointer text-black-light p-3 px-4 text-left list-none hover:font-extrabold font-semibold hover:bg-gray-dark"
                  >
                    {parseStringHtml(item.name, currInput)}
                  </li>
                );
              })}
            {results.length === 0 && !isSearching && !founded && (
              <div className="cursor-pointer text-black-light p-3 px-4 text-left list-none hover:font-extrabold font-semibold hover:bg-gray-dark">
                {intl.formatMessage({ id: "SORRY_FOUND" })}
              </div>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};
