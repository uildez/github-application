import { MagnifyingGlass } from "phosphor-react";
import React from "react";

export const SearchBar = () => {
  return (
    <form /*onSubmit={() => searchValue()}*/ className="flex items-center gap-2 w-3/4">
      <input
        type="text"
        className="px-3 py-4 h-6 bg-slate-100 rounded-2xl focus:outline-none text-slate-800 w-full"
        // value={searchValue}
        // onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type="submit" className="bg-red-600 p-2 rounded-full hover:scale-110 border-0 transition-transform ease-in-out">
        <MagnifyingGlass size={15} />
      </button>
    </form>
  );
};
