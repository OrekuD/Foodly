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
      <Image source={image} resizeMode="cover" style={styles.image} />
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
  image: {
    width: CARD_WIDTH,
    height: "90%",
    borderRadius: 10,
  },
});
