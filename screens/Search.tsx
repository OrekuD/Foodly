import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, Product } from "../types";
import { Text, ProductCard } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { products } from "../data/products";

const Search = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Main">) => {
  const { top: height } = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>(
    products.slice(0, 10)
  );

  useEffect(() => {
    searchProducts();
  }, [searchTerm]);

  const searchProducts = () => {
    const results = products.filter((product) =>
      product.name.includes(searchTerm)
    );
    setSearchResults(
      !searchTerm ? products.slice(0, 10) : results.length === 0 ? [] : results
    );
  };

  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView
        style={{ backgroundColor: white }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SearchFilter")}>
          <Text variant="headline" style={{ marginLeft: 20 }}>
            Search
          </Text>
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search on Foodly"
            value={searchTerm}
            onChangeText={(value) => setSearchTerm(value)}
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {searchResults.map((product, index) => (
            <ProductCard
              item={product}
              navigation={navigation}
              key={index}
              fixedHeight
            />
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  searchInput: {
    width: "100%",
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
  },
});
