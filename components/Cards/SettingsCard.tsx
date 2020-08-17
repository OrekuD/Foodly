import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AccountSetting, ProfileStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import Text from "../Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { black, lightgrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";

interface SettingsCardProps {
  item: AccountSetting;
  navigation: StackNavigationProp<ProfileStackParamList, "Profile">;
  last: boolean;
  more?: boolean;
}

const SettingsCard = ({ item, navigation, last, more }: SettingsCardProps) => {
  const { icon, subtitle, title, screen } = item;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => !more && navigation.navigate(screen)}
      style={styles.container}
    >
      {icon}
      <View style={{ ...styles.content, borderBottomWidth: last ? 0 : 1 }}>
        <View style={styles.textContent}>
          <Text
            variant="subhead"
            style={{ marginBottom: subtitle === "" ? 3 : 0 }}
          >
            {title}
          </Text>
          {subtitle === "" ? null : (
            <Text variant="subhead" color="grey" numberOfLines={1}>
              {subtitle}
            </Text>
          )}
        </View>
        <MaterialCommunityIcons name="chevron-right" size={34} color={black} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 65,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    borderBottomColor: lightgrey,
    marginLeft: 20,
    alignItems: "center",
    paddingRight: 10,
  },
  textContent: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    paddingVertical: 1,
  },
});
