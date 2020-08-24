import React from "react";
import { StyleSheet, Text } from "react-native";
import { width } from "../../constants/Layout";
import { green, white } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <RectButton onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </RectButton>
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
    backgroundColor: green,
  },
  text: {
    fontFamily: "SFProDisplay-SemiBold",
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 1.2,
    color: white,
  },
});
