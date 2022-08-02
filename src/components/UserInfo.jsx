import { ArrowCircleDown } from "phosphor-react";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserInfo = () => {
  const { userData, user, handleOnClick } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <div className="flex flex-col items-center">
            <img
              src={userData.avatar_url}
              className="w-[100px] rounded-full"
              alt={userData.alt}
            />
            <h1 className="font-semibold text-2xl">{userData.name}</h1>
            <a
              href={userData.html_url}
              className="hover:bg-red-600 px-2 py-1 rounded-lg transition-colors"
            >
              <h2>@{userData.twitter_username}</h2>
            </a>
            <p className="w-3/4 text-center text-sm pt-4">{userData.bio}</p>

            {/* <span className="flex items-center gap-2 p-2 text-xs bg-red-600 rounded-lg mt-4">Click in repositories to open Repos <ArrowCircleDown size={24}/></span> */}

            <section className="flex gap-8 pt-8 w-full justify-center">
              <div
                className="text-center p-4 bg-[#282828] cursor-pointer rounded-lg shadow-lg hover:scale-105 hover:shadow-red-600/50 transition duration-[500ms] ease-in-out animate-pulse hover:animate-none"
                onClick={handleOnClick}
              >
                <h1 className="text-2xl font-semibold">
                  {userData.public_repos}
                </h1>
                <h2 className="text-sm">Repositories</h2>
              </div>

              <div className="text-center p-4">
                <h1 className="text-2xl font-semibold">{userData.followers}</h1>
                <h2 className="text-sm">Followers</h2>
              </div>

              <div className="text-center p-4">
                <h1 className="text-2xl font-semibold">{userData.following}</h1>
                <h2 className="text-sm">Following</h2>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
        <h1 className="text-center text-base underline">Search for a User to see this Repositories</h1>
        </>
      )}
    </div>
  );
};
