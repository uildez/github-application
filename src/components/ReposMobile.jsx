import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";

export const ReposMobile = () => {
  const { searchValue, setSearchValue, searchRepos, user, showRepositories } =
    useContext(UserContext);

  return (
    <>
      {(function () {
        if (showRepositories === true && user.length > 0) {
          return (
            <div className="w-full p-[2.2rem] bg-[#343434] rounded-xl min-h-[0%] max-h-[100%] block md:hidden">
              <div className="flex flex-col items-center">
                <SearchBar
                  value={searchValue}
                  style="flex items-center gap-2 w-full"
                  change={(e) => setSearchValue(e.target.value)}
                  submit={(e) => searchRepos(e)}
                />
                <FilterButton />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })()}
    </>
  );
};
