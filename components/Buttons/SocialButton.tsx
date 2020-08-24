import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { width } from "../../constants/Layout";
import { green, white, deepblue, blue } from "../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { Facebook, Google } from "../Svgs";

interface SocialButtonProps {
  onPress?: () => void;
  variant: "facebook" | "google";
  navigation?: StackNavigationProp<RootStackParamList, "SignIn" | "SignUp">;
}

const SocialButton = ({ variant, navigation }: SocialButtonProps) => {
  return (
    <RectButton
      onPress={() => navigation?.navigate("GetStarted")}
      style={{
        ...styles.container,
        backgroundColor: variant === "facebook" ? deepblue : blue,
      }}
    >
      <View style={styles.iconContainer}>
        {variant === "facebook" ? (
          <Facebook size={10} color={deepblue} />
        ) : (
          <Google size={14} />
        )}
      </View>
      <Text style={styles.text}>{`Connect with ${variant}`}</Text>
    </RectButton>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 50,
    backgroundColor: green,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: white,
    marginHorizontal: 20,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: white,
    fontFamily: "SFProDisplay-SemiBold",
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 1.2,
    marginLeft: 20,
  },
});
