import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import Text from "../Text";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { black, lightgrey, grey, darkgrey } from "../../constants/Colors";
import { width } from "../../constants/Layout";
import { Notification } from "../Svgs";

interface NotificationSettingsCardProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    active: boolean;
  };
  last: boolean;
}

const NotificationSettingsCard = ({
  item,
  last,
}: NotificationSettingsCardProps) => {
  const { subtitle, title, active } = item;
  const [value, setValue] = useState<boolean>(active);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Notification size={22} color={darkgrey} />
      </View>
      <View style={{ ...styles.content, borderBottomWidth: last ? 0 : 1 }}>
        <View style={styles.textContent}>
          <Text variant="subhead">{title}</Text>
          <Text variant="subhead" color="grey" numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
        <View style={{ ...styles.iconContainer, width: 75 }}>
          <Switch value={value} onValueChange={() => setValue(!value)} />
        </View>
      </View>
    </View>
  );
};

export default NotificationSettingsCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 65,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: lightgrey,
    alignItems: "center",
  },
  textContent: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    paddingVertical: 1,
  },
  iconContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
