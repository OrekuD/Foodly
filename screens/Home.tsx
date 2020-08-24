import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Animated, Image } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  BottomTabParamList,
  HomeStackParamList,
  RootStackParamList,
} from "../types";
import { white } from "../constants/Colors";
import { MainHeader, ProductCard, HomeCard } from "../components";
import { products, featuredProducts } from "../data/products";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

const Home = ({ navigation }: StackScreenProps<RootStackParamList, "Main">) => {
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
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.5, 1, 0.5],
                extrapolate: "clamp",
              });

              return (
                <Animated.View key={index} style={{ ...styles.dot, opacity }} />
              );
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <View style={{ marginHorizontal: (width * 0.1) / 3 }}>
            {products.slice(0, 4).map((item, index) => (
              <ProductCard navigation={navigation} key={index} item={item} />
            ))}
          </View>
          <View style={{ marginRight: (width * 0.1) / 3 }}>
            {products.slice(4, 8).map((item, index) => (
              <ProductCard navigation={navigation} key={index} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.discountContainer}>
          <Image
            source={require("../assets/images/Banner.png")}
            resizeMode="contain"
            style={{ height: "100%", width: width * 0.9 }}
          />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    marginHorizontal: 3,
    width: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: white,
  },
  discountContainer: {
    width: width,
    height: 210,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    // backgroundColor: "red",
  },
});
