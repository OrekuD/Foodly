import React from "react";
import { View, StyleSheet, ViewStyle, Text } from "react-native";
import { width } from "../../constants/Layout";
import { green, white } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

interface SocialButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const SocialButton = ({ label, onPress, style }: SocialButtonProps) => {
  return (
    <RectButton onPress={onPress} style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  text: {
    color: white,
    fontFamily: "SFProDisplay-Bold",
    textTransform: "uppercase",
    fontSize: 18,
    letterSpacing: 1.2,
  },
});
