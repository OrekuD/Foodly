import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Product } from "../../types";
import { width } from "../../constants/Layout";
import Text from "../Text";
import { grey, lightgrey } from "../../constants/Colors";
import { useAppContext } from "../../context/Context";
import { Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface CartCardProps {
  product: Product;
}

const IMAGE_SIZE = width * 0.35;

const CartCard = ({ product }: CartCardProps) => {
  const { name, price, image, tags, count } = product;
  const { manageCart } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <View>
          <Text variant="headerText">{name}</Text>
          <View style={styles.buttons}>
            <RectButton
              onPress={() => manageCart("DECREASE_COUNT", product)}
              style={{ ...styles.button, opacity: count === 1 ? 0.5 : 1 }}
            >
              <Ionicons name="ios-remove" color={grey} size={30} />
            </RectButton>
            <Text variant="body" style={{ marginHorizontal: 15 }}>
              {count}
            </Text>
            <RectButton
              onPress={() => manageCart("INCREASE_COUNT", product)}
              style={{ ...styles.button }}
            >
              <Ionicons name="ios-add" color={grey} size={30} />
            </RectButton>
          </View>
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

export default CartCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: IMAGE_SIZE,
    overflow: "hidden",
    marginBottom: 30,
    flexDirection: "row",
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
  buttons: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: lightgrey,
    alignItems: "center",
    justifyContent: "center",
  },
});
