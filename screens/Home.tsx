import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { white } from "../constants/Colors";
import { MainHeader, ProductCard } from "../components";
import { products } from "../data/products";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = ({
  navigation,
}: BottomTabScreenProps<BottomTabParamList, "Home">) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={styles.container}>
        <MainHeader />
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          <View style={{ marginHorizontal: (width * 0.1) / 3 }}>
            {products
              .slice(0, Math.floor(products.length / 2))
              .map((item, index) => {
                return <ProductCard key={index} item={item} />;
              })}
          </View>
          <View style={{ marginRight: (width * 0.1) / 3 }}>
            {products
              .slice(Math.floor(products.length / 2), products.length - 1)
              .map((item, index) => {
                return <ProductCard key={index} item={item} />;
              })}
          </View>
        </ScrollView>
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
  // row: {
  //   width: width,
  //   justifyContent: "space-evenly",
  // },
});
