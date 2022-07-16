import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

export const UserContext = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function searchRepos(e) {
    e.preventDefault()
    console.log(searchValue);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/uildez`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await api.get("/uildez/repos");
        setUserRepos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRepos();
  }, []);

  console.log(userData);
  console.log(userRepos);

  return (
    <UserContext.Provider
      value={{
        userData,
        userRepos,
        setUserData,
        setUserRepos,
        searchValue,
        setSearchValue,
        searchRepos
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
