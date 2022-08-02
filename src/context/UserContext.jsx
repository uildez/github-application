import React, { useState, createContext, useEffect } from "react";
import { UserInfo } from "../components/UserInfo";
import api from "../services/api";

export const UserContext = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState("");
  const [showRepositories, setShowRepositories] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function searchRepos(e) {
    e.preventDefault();
  }
  
  function searchUserRepos(e) {
    e.preventDefault();
    setUser(searchUser)
  }

  function handleOnClick(){
    setShowRepositories(showRepositories => !showRepositories)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`${user}`);
        setUserData(res.data);
        const resRepos = await api.get(`/${user}/repos`);
        setUserRepos(resRepos.data);
        console.log(userRepos)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);


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
        searchUserRepos,
        selectedOption, 
        setSelectedOption,
        handleChange,
        data,
        searchUser, 
        setSearchUser,
        user, 
        setUser,
        handleOnClick,
        showRepositories,
        setShowRepositories
      }}
    >
      {props.children}
      {/* {userData && <UserInfo />} */}
    </UserContext.Provider>
  );
};
