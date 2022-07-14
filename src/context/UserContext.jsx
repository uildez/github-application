import React, { useState, createContext, useEffect } from "react";
import api from "../services/api";

export const UserContext = createContext();

export const ContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  //   useEffect(() => {
  //     (async function getUserData() {
  //       try {
  //         const response = await api.get(`/uildez`);
  //         const repos = await api.get(`/uildez/repos`);
  //         // const response = await api.get(`/${props.username}`);
  //         // const repos = await api.get(`/${props.username}/repos`);

  //         setUserData(response.data);
  //         setUserRepos(repos.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     })();
  //     getUserData()
  //   });

  useEffect(() => {
    const loadPhotos = async () => {
      await api
        .get("/uildez")
        .then((response) => {
            setUserData(response.data);
            console.log(response);
        })
        .catch((error) => console.log(error));
    };

    loadPhotos();
  },[]);

  console.log(userData);

  return (
    <UserContext.Provider
      value={{
        userData,
        userRepos,
        setUserData,
        setUserRepos,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
