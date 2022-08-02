import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { GithubLogo } from "phosphor-react";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const { searchUser, setSearchUser, searchUserRepos } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center pb-6 text-slate-100 gap-2 text-2xl">
        <GithubLogo size={28} />
        Github Interface
      </div>
      <SearchBar
        value={searchUser}
        style="flex items-center gap-2 w-4/5"
        change={(e) => setSearchUser(e.target.value)}
        submit={(e) => searchUserRepos(e)}
      />
    </div>
  );
};
