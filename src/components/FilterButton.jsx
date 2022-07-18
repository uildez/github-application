import React, { useContext, useState } from "react";
import Select from "react-select";
import { ReposItems } from "./ReposItems";
import { UserContext } from "../context/UserContext";

export const FilterButton = () => {
  const data = [
    { value: 1, label: "Todos" },
    { value: 2, label: "Ordem Alfabética" },
    { value: 3, label: "Arquivados" },
    { value: 4, label: "Último Commit" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const { userRepos, searchValue } = useContext(UserContext);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

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
            }).sort(function (a, b) {
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

  console.log(selectedOption);
  return (
    <div className="flex justify-end flex-col items-end w-full mt-4">
      <Select
        placeholder="Filtros"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        className="text-zinc-900 w-1/3 text-sm outline-none"
        onChange={handleChange} // assign onChange function]
      />

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

export default FilterButton;
