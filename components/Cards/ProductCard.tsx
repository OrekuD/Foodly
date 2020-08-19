import React, { useEffect } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Product } from "../../types";
import { width } from "../../constants/Layout";
import Text from "../Text";
import { green, white, grey } from "../../constants/Colors";
import { Dollar, FastClock } from "../Svgs";

interface ProductCardProps {
  item: Product;
}

const ratios = [1.2, 1.4, 1.6, 1.8];

const CARD_WIDTH = width * 0.45;

const HomeCard = ({ item }: ProductCardProps) => {
  const { name, price, image, rating, tags, time } = item;

  const CARD_HEIGHT =
    CARD_WIDTH * ratios[Math.floor(Math.random() * ratios.length)];

  return (
    <View style={{ ...styles.container, height: CARD_HEIGHT + 60 }}>
      <View style={{ ...styles.imageContainer, height: CARD_HEIGHT }}>
        <Image source={image} resizeMode="cover" style={{ ...styles.image }} />
        <View style={styles.overlay}>
          <View style={styles.row}>
            <FastClock size={18} color={white} />
            <Text variant="title1" color="white" style={{ marginLeft: 5 }}>
              {time}
            </Text>
          </View>
          <View style={styles.bottomTab}>
            <View style={styles.row}>
              <Dollar size={18} color={white} />
              <Text variant="title1" color="white" style={{ marginLeft: 5 }}>
                {price === 0 ? "Free" : price}
              </Text>
            </View>
            <View style={styles.rating}>
              <Text variant="title1" color="white">
                {rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text variant="cardText" style={{ marginVertical: 5 }} numberOfLines={1}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        {tags.map((tag, index) => {
          return (
            <>
              <Text
                key={tag}
                variant="body"
                color="darkgrey"
                style={{ marginVertical: 5 }}
                numberOfLines={1}
              >
                {tag}
              </Text>
              {index !== tags.length - 1 && <View style={styles.dot} />}
            </>
          );
        })}
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    overflow: "hidden",
    marginBottom: 20,
    // backgroundColor: "red",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: "rgba(1, 1, 1, 0.3)",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  bottomTab: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: green,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
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
