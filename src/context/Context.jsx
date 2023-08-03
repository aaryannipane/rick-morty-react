import React, { Children, createContext, useEffect, useReducer } from "react";
import { getCharacters } from "../http";
import CharReducer from "./CharReducer";

export const Data = createContext();

export const Context = ({ children }) => {
    const [state, dispatch] = useReducer(CharReducer, {
        character: {}
    })
  return <Data.Provider value={{state, dispatch}}>{children}</Data.Provider>;
};
