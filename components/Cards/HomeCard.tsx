import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { width } from "../../constants/Layout";
import { Product } from "../../types";

interface HomeCardProps {
  item: Product;
}

const CARD_WIDTH = width * 0.9;

const HomeCard = ({ item }: HomeCardProps) => {
  const { image } = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <View style={styles.overlay} />
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: CARD_WIDTH,
    height: "90%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(1, 1, 1, 0.15)",
    borderRadius: 10,
  },
});
