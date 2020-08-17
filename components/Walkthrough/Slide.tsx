import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { WalkthroughSlideProps } from "../../types";
import { width } from "../../constants/Layout";
import { white, grey } from "../../constants/Colors";
import Text from "../Text";

interface SlideProps {
  slide: WalkthroughSlideProps;
}

const IMAGE_SIZE = width * 0.85;

const Slide = ({ slide }: SlideProps) => {
  const { title, subtitle, image } = slide;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text variant="headline"> {title}</Text>
      <Text
        variant="body"
        style={{ color: grey, textAlign: "center", width: "80%" }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginVertical: 70,
  },
});
