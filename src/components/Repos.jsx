import React from "react";

import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";

export const Repos = () => {

  return (
    <div className="flex flex-col items-center">
      <SearchBar />
      <FilterButton />
    </div>
  );
};
