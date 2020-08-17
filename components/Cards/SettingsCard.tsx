import React from "react";
import { View, StyleSheet } from "react-native";
import { AccountSetting, ProfileStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Text from "../Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { black, lightgrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";

interface SettingsCardProps {
  item: AccountSetting;
  navigation: StackNavigationProp<ProfileStackParamList, "Profile">;
}

const SettingsCard = ({ item, navigation }: SettingsCardProps) => {
  const { icon, subtitle, title } = item;
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text variant="body">{title}</Text>
          <Text variant="body" color="grey" numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={34} color={black} />
      </View>
    </View>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 65,
    // backgroundColor: "aqua",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: lightgrey,
    marginLeft: 20,
    alignItems: "center",
  },
  textContent: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    paddingVertical: 1,
  },
});
