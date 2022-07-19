import React, { useContext } from "react";
import Select from "react-select";
import { UserContext } from "../context/UserContext";
import { FilterRepos } from "./FilterRepos";
import { ArrowDown } from "phosphor-react";

export const FilterButton = () => {
  const { selectedOption, handleChange, data } = useContext(UserContext);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "0",
      borderRadius: "20px",
      boxShadow: "none",
      padding: "0 10px",
    }),
  };

  return (
    <div className="flex justify-end flex-col items-end w-full mt-4">
      <div className="flex flex-row w-full justify-between">
        <div className="bg-red-600 text-white rounded-full px-4 text-md flex items-center">
          Repositories <ArrowDown />
        </div>
        <Select
          placeholder="Filters"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          className="text-zinc-900 w-1/3 text-sm"
          styles={colourStyles}
          onChange={handleChange} // assign onChange function]
        />
      </div>
      <FilterRepos />
    </div>
  );
};

export default FilterButton;
