import React, { ReactNode, createContext, useState, useContext } from "react";
import { AppContext, User, SearchFilter, Product, ACTIONS } from "../types";
import { products } from "../data/products";

interface ProviderProps {
  children: ReactNode;
}

const Context = createContext<AppContext>({
  isLoggedIn: false,
  isTabbarVissible: true,
  setUserState: () => {},
  setTabbarState: () => {},
  user: {},
  addUserDetails: () => {},
  cart: [],
});

// fullname: "Nelson Benson",
// email: "nelson@gmail.com",
// phone: "+1231231231",

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [isTabbarVissible, setIsTabbarVissible] = useState<boolean>(true);
  const [cart, setCart] = useState<Product[]>([]);

  const manageCart = (action: ACTIONS, product?: Product) => {
    switch (action) {
      case "ADD_TO_CART":
        if (isProductInCart(product!)) {
          return;
        }
        product!.count = 1;
        setCart([...cart, product!]);
        break;

      default:
        break;
    }
  };

  const isProductInCart = (item: Product) =>
    products.find((product) => product.id === item.id);

  const [user, setUser] = useState<User>({
    phone: "+1231231231",
    fullname: "Nelson Benson",
    email: "nelson@gmail.com",
    password: "qwertyqw",
  });

  const setUserState = (state: boolean) => {
    setIsLoggedIn(state);
  };

  const setTabbarState = (state: boolean) => {
    setIsTabbarVissible(state);
  };

  const addUserDetails = (userDetails: User) => {
    setUser(userDetails);
  };

  const state: AppContext = {
    isLoggedIn,
    isTabbarVissible,
    setUserState,
    setTabbarState,
    user,
    addUserDetails,
    isProductInCart,
    manageCart,
    cart,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
