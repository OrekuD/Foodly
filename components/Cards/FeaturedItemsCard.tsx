import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Product, HomeStackParamList, RootStackParamList } from "../../types";
import { width } from "../../constants/Layout";
import Text from "../Text";
import { grey } from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";

interface FeaturedItemsCardProps {
  product: Product;
  first: boolean;
  navigation: StackNavigationProp<RootStackParamList, "Product">;
}

const CARD_WIDTH = width * 0.35;

const FeaturedItemsCard = ({
  product,
  first,
  navigation,
}: FeaturedItemsCardProps) => {
  const { name, price, image, tags } = product;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Product", { item: product })}
      style={{ ...styles.container, marginLeft: first ? 20 : 0 }}
    >
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text variant="cardText" numberOfLines={1} style={{ marginVertical: 10 }}>
        {name}
      </Text>
      <View style={styles.row}>
        <Text variant="body">${price}</Text>
        <View style={styles.dot} />
        <Text variant="body" color="darkgrey">
          {tags[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedItemsCard;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_WIDTH + 100,
    overflow: "hidden",
    marginRight: 15,
    marginTop: 10,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grey,
    marginHorizontal: 5,
    marginTop: 5,
  },
});
