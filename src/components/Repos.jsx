import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

import { SearchBar } from "./SearchBar";
import { FilterButton } from "./FilterButton";
import { ReposItems } from "./ReposItems";

export const Repos = () => {
  const [cleanFilters, setCleanFilters] = useState({});
  const [order, setOrder] = useState({});
  const [lastCommit, setLastCommit] = useState({});
  const [archived, setArchived] = useState({});
  
  const { userRepos, searchValue } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center">
      <SearchBar />
      <div className="space-x-2 mt-6 w-full justify-around block">
        <FilterButton className="" onClick={() => setCleanFilters("")}>Todos</FilterButton>
        <FilterButton onClick={() => setOrder()}>
          Ordem Alfabética
        </FilterButton>
        <FilterButton onClick={() => setLastCommit()}>
          Último Commit
        </FilterButton>
        <FilterButton onClick={() => setArchived()}>Arquivados</FilterButton>
      </div>

      <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
        {userRepos.filter((value) => {
          if(searchValue === ""){
            return value
          }else if(value.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return (value)
          }
        }).sort()
        .map((repos) => (
          <ReposItems data={repos} key={repos.id} />
        ))}
      </div>
    </div>
  );
};
