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
  ChangePassword,
  PaymentMethods,
  Locations,
  ProfileInformation,
  AddSocialAccount,
  ReferFriends,
  Product,
  SearchFilter,
} from "../screens";
import { useAppContext } from "../context/Context";
import { Feather } from "@expo/vector-icons";
import { green, grey } from "../constants/Colors";
import { Food, ProfileIcon, Orderlist } from "../components/Svgs";

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
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
      <ProfileStack.Screen name="PaymentMethods" component={PaymentMethods} />
      <ProfileStack.Screen name="Locations" component={Locations} />
      <ProfileStack.Screen
        name="AddSocialAccount"
        component={AddSocialAccount}
      />
      <ProfileStack.Screen
        name="ProfileInformation"
        component={ProfileInformation}
      />
      <ProfileStack.Screen name="ReferFriends" component={ReferFriends} />
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
  const { isTabbarVissible } = useAppContext();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          height: 70,
        },
        labelStyle: {
          fontFamily: "SFProDisplay-Regular",
          fontSize: 16,
          marginBottom: 5,
        },
        activeTintColor: green,
        inactiveTintColor: grey,
        iconStyle: {
          marginTop: 5,
        },
      }}
      screenOptions={{
        tabBarVisible: isTabbarVissible,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => <Food size={18} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={22} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersNavigation}
        options={{
          tabBarIcon: ({ color }) => <Orderlist size={18} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon size={18} color={color} />,
        }}
      />
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
      <RootStack.Screen
        name="SearchFilter"
        component={SearchFilter}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <RootStack.Screen name="Product" component={Product} />
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
