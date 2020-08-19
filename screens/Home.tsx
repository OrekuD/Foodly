import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, HomeStackParamList } from "../types";
import { white } from "../constants/Colors";
import { MainHeader, ProductCard, HomeCard } from "../components";
import { products, featuredProducts } from "../data/products";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

const Home = ({ navigation }: StackScreenProps<HomeStackParamList, "Home">) => {
  const { top: height } = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={styles.container}>
        <MainHeader />
        <View style={styles.topSlides}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            contentContainerStyle={{ justifyContent: "center" }}
          >
            {featuredProducts.map((item, index) => {
              return <HomeCard key={index} item={item} />;
            })}
          </Animated.ScrollView>
          <View style={styles.pagination}>
            {featuredProducts.map((_, index) => {
              <Animated.View style={{ ...styles.dot }} />;
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <View style={{ marginHorizontal: (width * 0.1) / 3 }}>
            {products
              .slice(0, Math.floor(products.length / 2))
              .map((item, index) => (
                <ProductCard navigation={navigation} key={index} item={item} />
              ))}
          </View>
          <View style={{ marginRight: (width * 0.1) / 3 }}>
            {products
              .slice(Math.floor(products.length / 2), products.length)
              .map((item, index) => (
                <ProductCard navigation={navigation} key={index} item={item} />
              ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  topSlides: {
    width: width,
    height: 200,
    position: "relative",
  },
  pagination: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    height: 20,
    // backgroundColor: "blue",
    alignItems: "center",
  },
  dot: {
    marginHorizontal: 3,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "purple",
  },
});
