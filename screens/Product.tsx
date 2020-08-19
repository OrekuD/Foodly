import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { useAppContext } from "../context/Context";
import { white } from "../constants/Colors";

const Product = ({
  navigation,
}: StackScreenProps<HomeStackParamList, "Product">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Product</Text>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
