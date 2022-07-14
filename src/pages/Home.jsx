import React from "react";
import { Header } from "../components/Header";
import { Repos } from "../components/Repos";
import { UserInfo } from "../components/UserInfo";

export const Home = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-4">
      <div className="flex flex-col w-1/3 gap-4 min-h-[80%]">
        <div className="py-6 bg-[#343434] rounded-xl">
          <Header />
        </div>
        <div className="py-6 bg-[#343434] rounded-xl h-full relative">
          <UserInfo />
          <div className="bg-red-600 w-full h-3 mt-4 absolute rounded-b-lg" />
        </div>
      </div>
      <div className="w-2/4 p-8 bg-[#343434] rounded-xl min-h-[80%]">
        <Repos />
      </div>
    </div>
  );
};
