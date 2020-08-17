import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { width } from "../constants/Layout";
import { green } from "../constants/Colors";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({ label, onPress, style }: ButtonProps) => {
  return <View style={styles.container}></View>;
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 45,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
