import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeStackParamList,
  RootStackParamList,
  SearchStackParamList,
  OrdersStackParamList,
  ProfileStackParamList,
  BottomTabParamList,
} from "../types";
import {
  Home,
  Orders,
  Profile,
  Search,
  Walkthrough,
  SignIn,
  SignUp,
  ForgotPassword,
  GetStarted,
  VerifyPhone,
  SetupLocation,
} from "../screens";
import { useAppContext } from "../context/Context";

const RootStack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();
const OrdersStack = createStackNavigator<OrdersStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const OrdersNavigation = () => {
  return (
    <OrdersStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <OrdersStack.Screen name="Orders" component={Orders} />
    </OrdersStack.Navigator>
  );
};

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeNavigation} />
      <BottomTab.Screen name="Search" component={SearchNavigation} />
      <BottomTab.Screen name="Orders" component={OrdersNavigation} />
      <BottomTab.Screen name="Profile" component={ProfileNavigation} />
    </BottomTab.Navigator>
  );
};

const RootNavigation = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {!isLoggedIn && (
        <>
          <RootStack.Screen name="Walkthrough" component={Walkthrough} />
          <RootStack.Screen name="SignIn" component={SignIn} />
          <RootStack.Screen name="SignUp" component={SignUp} />
          <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
          <RootStack.Screen name="GetStarted" component={GetStarted} />
          <RootStack.Screen name="VerifyPhone" component={VerifyPhone} />
          <RootStack.Screen name="SetupLocation" component={SetupLocation} />
        </>
      )}
      <RootStack.Screen name="Main" component={BottomTabNavigation} />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
