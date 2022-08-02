import React from "react";
import { MagnifyingGlass } from "phosphor-react";

export const SearchBar = ({value, style, change, submit }) => {

  return (
    <form onSubmit={submit} className={style}>
      <input
        type="text"
        className="px-3 py-4 h-6 bg-slate-100 rounded-2xl focus:outline-none text-slate-800 w-full"
        value={value}
        onChange={change}
      />

      <button type="submit" className="bg-red-600 p-2 rounded-full hover:scale-110 border-0 transition-transform ease-in-out">
        <MagnifyingGlass size={15} />
      </button>
    </form>
  );
};
