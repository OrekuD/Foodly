import React from "react";
import { View, StyleSheet, FlatList, ScrollView, Platform } from "react-native";
import { AccountSetting, ProfileStackParamList } from "../../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, SettingsCard, NotificationSettingsCard } from "../../components";
import { white, grey, darkgrey } from "../../constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import {
  ProfileIcon,
  Lock,
  Marker,
  Facebook,
  Share,
  Logout,
  Doucument,
  CreditCard,
} from "../../components/Svgs";

const Profile = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Profile">) => {
  const { top: paddingTop } = useSafeAreaInsets();

  const accountSettings: AccountSetting[] = [
    {
      id: "0",
      title: "Profile Information",
      subtitle: "Change your account information",
      icon: <ProfileIcon size={18} color={darkgrey} />,
      screen: "ProfileInformation",
    },
    {
      id: "1",
      title: "Change Password",
      subtitle: "Change your password",
      icon: <Lock size={18} color={darkgrey} />,
      screen: "ChangePassword",
    },
    {
      id: "2",
      title: "Payment Methods",
      subtitle: "Add your credit & debit cards",
      icon: <CreditCard size={22} color={darkgrey} />,
      screen: "PaymentMethods",
    },
    {
      id: "3",
      title: "Locations",
      subtitle: "Add or remove your delivery locations",
      icon: <Marker size={18} color={darkgrey} />,
      screen: "Locations",
    },
    {
      id: "4",
      title: "Add Social Account",
      subtitle: "Add Facebook, Twitter, etc",
      icon: <Facebook size={12} color={darkgrey} />,
      screen: "AddSocialAccount",
    },
    {
      id: "5",
      title: "Refer to Friends",
      subtitle: "Get $10 for reffering friends",
      icon: <Share size={20} color={darkgrey} />,
      screen: "ReferFriends",
    },
  ];

  const notificationSettings = [
    {
      id: "0",
      title: "Push Notifications",
      subtitle: "Turn on push notifications",
      active: true,
    },
    {
      id: "1",
      title: "SMS Notifications",
      subtitle: "Turn on SMS notifications",
      active: false,
    },
    {
      id: "2",
      title: "Promotional Notifications",
      subtitle: "Turn on promotional notifications",
      active: true,
    },
  ];

  const moreSettings = [
    {
      id: "0",
      title: "Rate Us",
      subtitle: `Rate us on ${
        Platform.OS === "android" ? "PlayStore" : "AppStore"
      }`,
      icon: <FontAwesome name="star" size={24} color={darkgrey} />,
    },
    {
      id: "1",
      title: "FAQ",
      subtitle: "Frequently asked questions",
      icon: <Doucument size={18} color={darkgrey} />,
    },
    {
      id: "2",
      title: "Logout",
      subtitle: "",
      icon: <Logout size={22} color={darkgrey} />,
    },
  ];

  return (
    <>
      <View style={{ height: paddingTop, backgroundColor: white }} />
      <ScrollView>
        <View style={styles.container}>
          <Text variant="headline" style={{ margin: 20, marginBottom: 10 }}>
            Account Settings
          </Text>
          <Text
            variant="body"
            color="grey"
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            Update your settings like notifications, payment, edit profile, etc
          </Text>
          <View style={styles.accountSettings}>
            {accountSettings.map((item, index) => (
              <SettingsCard
                key={index}
                item={item}
                navigation={navigation}
                last={index === accountSettings.length - 1}
              />
            ))}
          </View>
          <View style={styles.subSection}>
            <Text
              variant="body"
              style={{
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: 20,
                marginTop: 10,
              }}
              color="darkgrey"
            >
              Notifications
            </Text>
            {notificationSettings.map((item, index) => (
              <NotificationSettingsCard
                key={index}
                item={item}
                last={index === notificationSettings.length - 1}
              />
            ))}
          </View>
          <View style={styles.subSection}>
            <Text
              variant="body"
              style={{
                textTransform: "uppercase",
                letterSpacing: 1,
                margin: 20,
                marginTop: 10,
              }}
              color="darkgrey"
            >
              More
            </Text>
            {moreSettings.map((item, index) => (
              <SettingsCard
                more
                key={index}
                item={item}
                last={index === notificationSettings.length - 1}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  accountSettings: {
    paddingTop: 40,
  },
  subSection: {
    paddingTop: 20,
  },
});
