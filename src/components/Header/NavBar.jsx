import React from "react";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory();
  const redirect = (name) => {
    history.push(`/${name}`);
  };
  return (
    <div class="flex space-x-4">
      <button
        name=""
        class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={(e) => {
          redirect(e.target.name);
        }}
      >
        Home
      </button>
      <button
        name="cocktails"
        class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={(e) => {
          redirect(e.target.name);
        }}
      >
        Cocktails
      </button>
      <button
        name="article"
        class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
        onClick={(e) => {
          redirect(e.target.name);
        }}
      >
        Articles
      </button>
    </div>
  );
};
