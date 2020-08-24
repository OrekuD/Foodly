import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Product } from "../../types";
import { width } from "../../constants/Layout";
import Text from "../Text";
import { grey } from "../../constants/Colors";

interface OrdersCardProps {
  order: Product;
  pastOrders?: boolean;
}

const IMAGE_SIZE = width * 0.35;

const OrdersCard = ({ order, pastOrders }: OrdersCardProps) => {
  const { name, price, image, tags } = order;

  return (
    <View style={{ ...styles.container, opacity: pastOrders ? 0.6 : 1 }}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <View>
          <Text variant="headerText">{name}</Text>
          <Text variant="body" numberOfLines={3} color="darkgrey">
            Pariatur cillum excepteur veniam commodo laboris eiusmod dolor.
          </Text>
        </View>
        <View style={styles.row}>
          <Text variant="body" color="darkgrey">
            {tags[0]}
          </Text>
          <Text variant="body" color="green">
            ${price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: IMAGE_SIZE,
    overflow: "hidden",
    marginBottom: 20,
    flexDirection: "row",
    // backgroundColor: "yellow",
  },
  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bottomTab: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grey,
    marginHorizontal: 5,
    marginTop: 5,
  },
  tags: {
    flexDirection: "row",
    overflow: "hidden",
  },
});
