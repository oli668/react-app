import React, { useState, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import { Transition } from "@headlessui/react";

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
  const [isFocus, setIsFocus] = useState(false);
  const [currInput, setCurrInput] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debounceSearch = useRef(
    debounce((currInput) => {
      fetchApi(currInput).then((results) => {
        setIsSearching(false);
        console.log(results);
        setResults(results);
      });
    }, 1000)
  );

  const parseStringHtml = (str, originTerm) => {
    const term = originTerm.toLowerCase();
    const str1 =
      str && str.replace(new RegExp(term, "gi"), (match) => `<b>${match}</b>`);
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

  const fetchApi = () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());
  };

  useEffect(() => {
    if (currInput.length >= 3) {
      setIsSearching(true);
      debounceSearch.current(currInput);
    } else {
      setResults([]);
    }
  }, [currInput]);

  return (
    <div className="md:pt-3 pt-0 w-full relative">
      <div
        className={`${
          results.length > 0 ? "rounded-b-none rounded-bl-none" : ""
        } flex items-center rounded-md shadow-xl h-11`}
      >
        <input
          className="rounded-md w-full text-black-light leading-tight p-3 focus:outline-none"
          id="search"
          type="text"
          value={currInput}
          autoComplete="off"
          onFocus={() => {
            setIsFocus(true);
          }}
          onChange={(e) => {
            setCurrInput(e.target.value);
          }}
          onBlur={() => {
            setIsFocus(false);
            setResults([]);
            setCurrInput("");
          }}
          placeholder="Search"
        />
        <div className="p-4">
          <button className="text-black-light rounded-full p-2 focus:outline-none w-10 md:h10 h6 flex items-center justify-center">
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
          <div>
            {results.length > 0 &&
              isFocus &&
              results.slice(0, 10).map((item, id) => {
                return (
                  <li
                    key={id}
                    className=" cursor-pointer text-black-light p-3 px-4 text-left list-none hover:font-extrabold font-semibold hover:bg-gray-dark"
                  >
                    {parseStringHtml(item.title, currInput)}
                  </li>
                );
              })}
          </div>
        </div>
      </Transition>
    </div>
  );
};
