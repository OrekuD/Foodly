import React, { ReactNode } from "react";
import { Text as RNText, View, StyleSheet, TextStyle } from "react-native";
import { black, white, grey } from "../constants/Colors";

interface TextProps {
  children: ReactNode;
  style?: TextStyle;
  variant:
    | "title"
    | "title1"
    | "title2"
    | "headline"
    | "body"
    | "subhead"
    | "caption"
    | "headerText";
  textProps?: TextProps;
  color?: "white" | "grey";
}

const Text = ({ style, children, variant, textProps, color }: TextProps) => {
  let textStyle;
  let textColor;

  switch (variant) {
    case "title":
      textStyle = styles.title;
      break;
    case "title1":
      textStyle = styles.title1;
      break;
    case "title2":
      textStyle = styles.title2;
      break;
    case "headline":
      textStyle = styles.headline;
      break;
    case "body":
      textStyle = styles.body;
      break;
    case "subhead":
      textStyle = styles.subhead;
      break;
    case "caption":
      textStyle = styles.caption;
      break;
    case "headerText":
      textStyle = styles.headerText;
      break;
    default:
      break;
  }

  switch (color) {
    case "white":
      textColor = white;
      break;
    case "grey":
      textColor = grey;
      break;
    default:
      textColor = black;
      break;
  }

  return (
    <RNText style={{ ...textStyle, color: textColor, ...style }} {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;

Text.defaultProps = {
  variant: "default",
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "SFProDisplay-Regular",
  },
  title1: {
    fontSize: 28,
    fontFamily: "SFProDisplay-Regular",
  },
  title2: {
    fontSize: 24,
    fontFamily: "SFProDisplay-Regular",
  },
  headline: {
    fontSize: 36,
    fontFamily: "SFProDisplay-Bold",
  },
  body: {
    fontSize: 22,
    fontFamily: "SFProDisplay-Regular",
  },
  subhead: {
    fontSize: 20,
    fontFamily: "SFProDisplay-Regular",
  },
  caption: {
    fontSize: 16,
    fontFamily: "SFProDisplay-Regular",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "SFProDisplay-Bold",
  },
});
