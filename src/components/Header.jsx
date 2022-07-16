import { GithubLogo } from "phosphor-react";
import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center pb-6 text-slate-100 gap-2 text-2xl">
        <GithubLogo size={28} />
        Github Interface
      </div>
      <div  className="flex gap-2">
        <a
          className="bg-red-600 px-8 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors"
          href="#"
        >
          LinkedIn
        </a>
        <a
          className="bg-red-600 px-8 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors"
          href="#"
        >
          GitHub
        </a>
        <a
          className="bg-red-600 px-8 py-2 rounded-full font-medium text-sm hover:bg-red-700 transition-colors"
          href="#"
        >
          Gmail
        </a>
      </div>
      {/* <SearchBar /> */}
    </div>
  );
};
