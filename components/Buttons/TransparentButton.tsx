import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";
import { width } from "../../constants/Layout";
import { green, white, black, grey } from "../../constants/Colors";

interface TransparentButtonProps {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
}

const TransparentButton = ({ label, onPress }: TransparentButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderColor: grey,
    borderWidth: 1,
    backgroundColor: white,
  },
  text: {
    fontFamily: "SFProDisplay-Bold",
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 1.2,
    color: grey,
  },
});
