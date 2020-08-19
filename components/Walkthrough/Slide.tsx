import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { WalkthroughSlideProps } from "../../types";
import { width } from "../../constants/Layout";
import { white, grey, lightgrey } from "../../constants/Colors";
import Text from "../Text";

interface SlideProps {
  slide: WalkthroughSlideProps;
  first: boolean;
}

const IMAGE_SIZE = width * 0.85;

const Slide = ({ slide, first }: SlideProps) => {
  const { title, subtitle, image } = slide;
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.imageContainer,
          backgroundColor: first ? lightgrey : "transparent",
        }}
      >
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
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
  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    marginVertical: 70,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
