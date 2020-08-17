import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { AccountSetting, ProfileStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, SettingsCard } from "../components";
import { white, grey } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

const Profile = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Profile">) => {
  const { top: paddingTop } = useSafeAreaInsets();

  const accountSettings: AccountSetting[] = [
    {
      id: "0",
      title: "Profile Information",
      subtitle: "Change your account information",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "ProfileInformation",
    },
    {
      id: "1",
      title: "Change Password",
      subtitle: "Change your password",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "ChangePassword",
    },
    {
      id: "2",
      title: "Payment Methods",
      subtitle: "Add your credit & debit cards",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "PaymentMethods",
    },
    {
      id: "3",
      title: "Locations",
      subtitle: "Add or remove your delivery locations",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "Locations",
    },
    {
      id: "4",
      title: "Add Social Account",
      subtitle: "Add Facebook, Twitter, etc",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "AddSocialAccount",
    },
    {
      id: "5",
      title: "Refer to Friends",
      subtitle: "Get $10 for reffering friends",
      icon: <Ionicons name="ios-search" size={24} color={grey} />,
      screen: "ReferFriends",
    },
  ];

  return (
    <View style={{ ...styles.container, paddingTop }}>
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
      <View style={styles.settingsItems}>
        <FlatList
          data={accountSettings}
          keyExtractor={({ id }) => id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SettingsCard item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  settingsItems: {
    paddingTop: 20,
  },
});
