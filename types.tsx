import { ImageRequireSource } from "react-native";

export type RootStackParamList = {
  Walkthrough: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  SetupLocation: undefined;
  GetStarted: undefined;
  VerifyPhone: undefined;
  Main: undefined;
  SearchFilters: undefined;
  Product: { item: Product };
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
  Orders: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type OrdersStackParamList = {
  Orders: undefined;
  Cart: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  ChangePassword: undefined;
  PaymentMethods: undefined;
  Locations: undefined;
  AddSocialAccount: undefined;
  ProfileInformation: undefined;
  ReferFriends: undefined;
};

export interface WalkthroughSlideProps {
  id: string;
  title: string;
  subtitle: string;
  image: ImageRequireSource;
}

export type ACTIONS =
  | "ADD_TO_CART"
  | "REMOVE_FROM_CART"
  | "INCREASE_COUNT"
  | "DECREASE_COUNT"
  | "EMPTY_CART";

export interface AppContext {
  isLoggedIn: boolean;
  isTabbarVissible: boolean;
  setTabbarState: (state: boolean) => void;
  setUserState: (state: boolean) => void;
  user: User;
  addUserDetails: (userDetails: User) => void;
  cart: Product[];
  isProductInCart: (product: Product) => boolean;
  manageCart: (action: ACTIONS, product?: Product) => void;
  cartTotal: number;
}

export interface SearchFilter {
  all?: boolean;
  chinese?: boolean;
  soups?: boolean;
  fruits?: boolean;
  burgers?: boolean;
}

export interface AccountSetting {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  screen?: keyof ProfileStackParamList;
}

export interface SvgProps {
  size: number;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  tags: string[];
  time: string;
  image: ImageRequireSource;
  aspectRatio?: number;
  sandwich?: boolean;
  soup?: boolean;
  burger?: boolean;
  fruit?: boolean;
  ratings?: {
    average: number;
    total: number;
  };
  count: number;
}

export interface User {
  fullname?: string;
  email?: string;
  phone?: string;
  password?: string;
}
