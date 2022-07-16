import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserInfo = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center">
      <img
        src={userData.avatar_url}
        className="w-[100px] rounded-full"
        alt={userData.alt}
      />
      <h1 className="font-semibold text-2xl">{userData.name}</h1>
      <a href={userData.html_url} className="hover:bg-red-600 px-2 py-1 rounded-lg transition-colors">
        <h2>@{userData.twitter_username}</h2>
      </a>
      <p className="w-3/4 text-center text-sm pt-4">{userData.bio}</p>

      <div className="flex gap-8 pt-8 w-full justify-center">
        <div className="text-center" onClick={() => handleOnClick("/repos")}>
          <h1 className="text-2xl font-semibold">{userData.public_repos}</h1>
          <h2 className="text-sm">Repositórios</h2>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold">{userData.followers}</h1>
          <h2 className="text-sm">Seguidores</h2>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold">{userData.following}</h1>
          <h2 className="text-sm">Seguindo</h2>
        </div>
      </div>
    </div>
  );
};
