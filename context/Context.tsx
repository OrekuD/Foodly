import React, { ReactNode, createContext, useState, useContext } from "react";
import { AppContext } from "../types";

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  isLoggedIn: false,
  setUserState: () => {},
});

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const setUserState = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const state: AppContext = {
    isLoggedIn,
    setUserState,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
