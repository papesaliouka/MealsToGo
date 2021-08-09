import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyWord, setKeyWord] = useState("San Francisco");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    setKeyWord(searchKeyWord);
  };
  useEffect(()=>{
    if (!keyWord.length) {
      return;
    }
    locationRequest(keyWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  },[keyWord])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyWord,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
