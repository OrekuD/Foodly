import React, { ReactNode } from "react";
import {
  Text as RNText,
  View,
  StyleSheet,
  TextStyle,
  TextProps,
} from "react-native";
import { black, white, grey, green, darkgrey } from "../constants/Colors";

interface Props extends TextProps {
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
    | "headerText"
    | "cardText";
  color?: "white" | "grey" | "green" | "darkgrey";
}

const Text = ({ style, children, variant, color, numberOfLines }: Props) => {
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
    case "cardText":
      textStyle = styles.cardText;
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
    case "darkgrey":
      textColor = darkgrey;
      break;
    case "green":
      textColor = green;
      break;
    default:
      textColor = black;
      break;
  }

  return (
    <RNText
      style={{ ...textStyle, color: textColor, ...style }}
      {...{ numberOfLines }}
    >
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
    fontFamily: "SFProDisplay-Medium",
  },
  title1: {
    fontSize: 16,
    fontFamily: "SFProDisplay-SemiBold",
  },
  title2: {
    fontSize: 30,
    fontFamily: "SFProDisplay-Bold",
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
    fontFamily: "SFProDisplay-Medium",
  },
  caption: {
    fontSize: 16,
    fontFamily: "SFProDisplay-Regular",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "SFProDisplay-Bold",
  },
  cardText: {
    fontSize: 22,
    fontFamily: "SFProDisplay-SemiBold",
  },
});
