import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Image, Animated } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useAppContext } from "../context/Context";
import { white, grey, green } from "../constants/Colors";
import { width, height } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { Share, Dollar, Timer } from "../components/Svgs";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Text, FeaturedItemsCard, ProductCard } from "../components";
import { products } from "../data/products";

const IMAGE_HEIGHT = 300;

const Product = ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Product">) => {
  const { isProductInCart, manageCart } = useAppContext();
  const { item } = route.params;
  const {
    id,
    name,
    price,
    tags,
    time,
    image,
    ratings,
    burger,
    fruit,
    sandwich,
    soup,
  } = item;
  const { top } = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const scale = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 1.2],
    extrapolate: "clamp",
  });

  const translateY = scrollY.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
      <View style={styles.imageContainer}>
        <Animated.Image
          source={image}
          resizeMode="cover"
          style={{
            ...styles.image,
            transform: [{ scale }, { translateY }],
          }}
        />
        <View style={{ ...styles.header, top: top + 10 }}>
          <BorderlessButton onPress={navigation.goBack}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={white}
              size={34}
            />
          </BorderlessButton>
          <View style={styles.iconRow}>
            <BorderlessButton>
              <Share size={20} color={white} />
            </BorderlessButton>
            <BorderlessButton>
              <Feather
                name="search"
                color={white}
                size={26}
                style={{ marginLeft: 15 }}
              />
            </BorderlessButton>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <Text variant="title2">{name}</Text>
          <View style={styles.row}>
            {tags.map((tag, index) => {
              return (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    variant="body"
                    color="darkgrey"
                    style={{ marginVertical: 5 }}
                    numberOfLines={1}
                  >
                    {tag}
                  </Text>
                  {index !== tags.length - 1 && <View style={styles.dot} />}
                </View>
              );
            })}
          </View>
          <View style={styles.row}>
            <Text variant="caption" style={{ marginRight: 10 }}>
              {ratings?.average}
            </Text>
            <FontAwesome name="star" color={green} size={16} />
            <Text variant="caption" style={{ marginLeft: 10 }}>
              {ratings?.total}+ Ratings
            </Text>
          </View>
          <View
            style={{
              ...styles.row,
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <View style={styles.section}>
              <View style={{ marginRight: 5, marginTop: 5 }}>
                <Dollar size={16} color={green} />
              </View>
              <View style={styles.col}>
                <Text variant="body">Free</Text>
                <Text variant="caption" color="darkgrey">
                  Delivery
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={{ margin: 5 }}>
                <Timer size={16} color={green} />
              </View>
              <View style={styles.col}>
                <Text variant="body">{time.slice(0, 2)}</Text>
                <Text variant="caption" color="darkgrey">
                  Minutes
                </Text>
              </View>
            </View>
            {isProductInCart(item) ? (
              <RectButton
                onPress={() => manageCart("REMOVE_FROM_CART", item)}
                style={styles.button}
              >
                <View style={styles.button}>
                  <Text variant="subhead" color="green">
                    REMOVE
                  </Text>
                </View>
              </RectButton>
            ) : (
              <RectButton
                onPress={() => manageCart("ADD_TO_CART", item)}
                style={styles.button}
              >
                <View style={styles.button}>
                  <Text variant="subhead" color="green">
                    TAKE AWAY
                  </Text>
                </View>
              </RectButton>
            )}
          </View>
        </View>
        <View style={styles.featuredItems}>
          <Text
            variant="title2"
            style={{
              paddingHorizontal: 20,
            }}
          >
            Featuered Items
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.slice(6, 11).map((product, index) => (
              <FeaturedItemsCard
                product={product}
                key={index}
                first={index === 0}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
        <Text variant="title2" style={{ margin: 20, marginTop: 0 }}>
          Similar Items
        </Text>
        <View style={styles.items}>
          {products
            .filter((product) => product.name === name)
            .map((item, index) => (
              <ProductCard
                key={index}
                navigation={navigation}
                fixedHeight
                item={item}
              />
            ))}
        </View>
      </View>
    </Animated.ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  imageContainer: {
    width: width,
    height: IMAGE_HEIGHT,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grey,
    marginHorizontal: 5,
    marginTop: 5,
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth * 2.5,
    borderColor: green,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
  },
  col: {
    height: 50,
    justifyContent: "space-between",
    // paddingVertical: 2,
  },
  featuredItems: {
    marginVertical: 15,
  },
  items: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
