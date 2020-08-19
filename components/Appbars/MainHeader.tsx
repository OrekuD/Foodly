import React from "react";
import { View, StyleSheet } from "react-native";
import { width } from "../../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { lightgrey, black } from "../../constants/Colors";
import Text from "../Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text
        variant="title1"
        color="grey"
        style={{
          marginTop: 10,
          alignSelf: "center",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Delivery To
      </Text>
      <View style={styles.bottom}>
        <Text variant="headerText">San Francisco</Text>
        <MaterialCommunityIcons
          name="chevron-down"
          color={black}
          size={28}
          style={{ marginTop: 5 }}
        />
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: lightgrey,
  },
  bottom: {
    width: width,
    height: 50,
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});
