import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = () => {
  const { searchValue, setSearchValue, searchRepos } = useContext(UserContext);

  return (
    <form onSubmit={(e) => searchRepos(e)} className="flex items-center gap-2 w-full">
      <input
        type="text"
        className="px-3 py-4 h-6 bg-slate-100 rounded-2xl focus:outline-none text-slate-800 w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type="submit" className="bg-red-600 p-2 rounded-full hover:scale-110 border-0 transition-transform ease-in-out">
        <MagnifyingGlass size={15} />
      </button>
    </form>
  );
};
