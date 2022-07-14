import { GithubLogo } from "phosphor-react";
import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <div className="flex flex-col p-1 items-center w-full">
      <div className="flex items-center pb-6 text-slate-100 gap-2 text-2xl">
        <GithubLogo size={28} />
        Github Interface
      </div>
      <SearchBar />
    </div>
  );
};
