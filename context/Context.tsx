import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
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
  manageCart: () => {},
  isProductInCart: () => false,
  cartTotal: 0,
});

const Provider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isTabbarVissible, setIsTabbarVissible] = useState<boolean>(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [user, setUser] = useState<User>({
    phone: "+1231231231",
    fullname: "Nelson Benson",
    email: "nelson@gmail.com",
    password: "qwertyqw",
  });

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count * item.price));
    setCartTotal(Number(total.toFixed(2)));
  };

  const manageCart = (action: ACTIONS, product?: Product) => {
    let tempCart: Product[] = [];
    let updatedProduct: Product;
    let updatedProductIndex = 0;
    switch (action) {
      case "ADD_TO_CART":
        if (isProductInCart(product!)) {
          return;
        }
        product!.count = 1;
        setCart([...cart, product!]);
        break;
      case "REMOVE_FROM_CART":
        setCart(cart.filter((cartItem) => cartItem.id !== product!.id));
        break;
      case "EMPTY_CART":
        setCart([]);
        break;
      case "INCREASE_COUNT":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product!.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        updatedProduct.count++;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      case "DECREASE_COUNT":
        tempCart = [...cart];
        updatedProductIndex = tempCart.findIndex(
          (item) => item.id === product!.id
        );
        updatedProduct = tempCart[updatedProductIndex];
        if (updatedProduct.count === 1) {
          setCart(cart.filter((item) => item.id !== product!.id));
          return;
        }
        updatedProduct.count--;
        tempCart[updatedProductIndex] = updatedProduct;
        setCart(tempCart);
        break;
      default:
        break;
    }
  };

  const isProductInCart = (item: Product) => {
    if (cart.find((product) => product.id === item.id)) {
      return true;
    }
    return false;
  };

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
    cartTotal,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
