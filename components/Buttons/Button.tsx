import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";
import { width } from "../../constants/Layout";
import { green, white, black, grey } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  transparent?: boolean;
}

const Button = ({ label, onPress, style, transparent }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: transparent ? white : green,
        borderWidth: transparent ? 1 : 0,
        ...style,
      }}
    >
      <Text style={{ ...styles.text, color: transparent ? black : white }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderColor: grey,
  },
  text: {
    fontFamily: "SFProDisplay-Bold",
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 1.2,
  },
});
