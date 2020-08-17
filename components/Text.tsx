import React, { ReactNode } from "react";
import { Text as RNText, View, StyleSheet, TextStyle } from "react-native";

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
    | "caption";
  textProps?: TextProps;
}

const Text = ({ style, children, variant, textProps }: TextProps) => {
  let textStyle;
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
    default:
      break;
  }

  return (
    <RNText style={{ ...textStyle, ...style }} {...textProps}>
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
    fontSize: 30,
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
});
