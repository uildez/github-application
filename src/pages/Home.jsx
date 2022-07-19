import React from "react";
import { Header } from "../components/Header";
import { Repos } from "../components/Repos";
import { UserInfo } from "../components/UserInfo";

export const Home = () => {
  return (
    <main className="flex items-stretch justify-center md:w-screen gap-4 py-8 md:py-0">
      <div className="flex flex-col w-[90%] md:w-1/3 gap-4 min-h-[80%] max-h-[80%] justify-between">
        <section className="py-[1.2rem] bg-[#343434] rounded-xl">
          <Header />
        </section>
        <section className="py-6 bg-[#343434] rounded-xl h-full relative">
          <UserInfo />
          <div className="bg-red-600 w-5/6 md:block md:w-full h-3 bottom-0 absolute rounded-b-lg hidden" />
          <section className="block md:hidden mt-16 px-8">
            <Repos />
          </section>
        </section>
      </div>
      <div className="w-2/4 p-[2.2rem] bg-[#343434] rounded-xl min-h-[80%] max-h-[80%] hidden md:block">
        <Repos />
      </div>
    </main>
  );
};
