import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

export const UserContext = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  function searchRepos(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/uildez`);
        setUserData(res.data);
        const resRepos = await api.get("/uildez/repos");
        setUserRepos(resRepos.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const data = [
    { value: 1, label: "All" },
    { value: 2, label: "Alphabetical order" },
    { value: 3, label: "Archived" },
    { value: 4, label: "Last Commit" },
  ];

  return (
    <UserContext.Provider
      value={{
        userData,
        userRepos,
        setUserData,
        setUserRepos,
        searchValue,
        setSearchValue,
        searchRepos,
        selectedOption, 
        setSelectedOption,
        handleChange,
        data
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
