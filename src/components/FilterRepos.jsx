import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ReposItems } from "./ReposItems";

export const FilterRepos = () => {
  const { userRepos, searchValue, selectedOption } = useContext(UserContext);

  function renderElement() {
    if (selectedOption.value === 1) {
      return (
        <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
          {userRepos
            .filter((value) => {
              if (searchValue === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return value;
              }
            })
            .reverse()
            .map((repos) => (
              <ReposItems data={repos} key={repos.id} />
            ))}
        </div>
      );
    }

    if (selectedOption.value === 2) {
      return (
        <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
          {userRepos
            .filter((value) => {
              if (searchValue === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return value;
              }
            })
            .sort()
            .map((repos) => (
              <ReposItems data={repos} key={repos.id} />
            ))}
        </div>
      );
    }

    if (selectedOption.value === 3) {
      return (
        <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
          {userRepos
            .filter((value) => {
              if (searchValue === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return value;
              }
            })
            .map((repos) => {
              if (repos.archived === true) {
                return <ReposItems data={repos} key={repos.id} />;
              }
            })}
        </div>
      );
    }

    if (selectedOption.value === 4) {
      return (
        <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
          {userRepos
            .filter((value) => {
              if (searchValue === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return value;
              }
            })
            .sort(function (a, b) {
              var dateA = new Date(a.pushed_at).getTime();
              var dateB = new Date(b.pushed_at).getTime();
              return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
            })
            .map((repos) => (
              <ReposItems data={repos} key={repos.id} />
            ))}
        </div>
      );
    }
  }

  return (
    <div className="w-full">
      {selectedOption ? (
        <div className="w-full min-h-[350px]">{renderElement()}</div>
      ) : (
        <div className="flex flex-wrap justify-around overflow-y-auto w-full max-h-[350px] mt-4 scrollbar gap-4">
          {userRepos
            .filter((value) => {
              if (searchValue === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return value;
              }
            })
            .reverse()
            .map((repos) => (
              <ReposItems data={repos} key={repos.id} />
            ))}
        </div>
      )}
    </div>
  );
};
