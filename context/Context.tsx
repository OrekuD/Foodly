import React, { ReactNode, createContext, useState, useContext } from "react";
import { AppContext } from "../types";

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  isLoggedIn: false,
  isTabbarVissible: true,
  setUserState: () => {},
  setTabbarState: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isTabbarVissible, setIsTabbarVissible] = useState<boolean>(true);

  const setUserState = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const setTabbarState = (state: boolean) => {
    setIsTabbarVissible(state);
  };

  const state: AppContext = {
    isLoggedIn,
    isTabbarVissible,
    setUserState,
    setTabbarState,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
