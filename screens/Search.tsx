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
import { white, darkgrey, palewhite } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { products } from "../data/products";
import { Ionicons } from "@expo/vector-icons";

const Search = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Main">) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>(
    products.slice(0, 10)
  );
  const { top: height } = useSafeAreaInsets();

  useEffect(() => {
    searchProducts();
  }, [searchTerm]);

  const searchProducts = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        contentContainerStyle={{ paddingTop: 20 }}
      >
        <View style={styles.row}>
          <Text variant="headline">Search</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SearchFilters")}
          >
            <Text variant="body">Filters</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchInput}>
          <View style={styles.textInputContainer}>
            <Ionicons
              name="ios-search"
              color={darkgrey}
              size={24}
              style={{ marginHorizontal: 20 }}
            />
            <TextInput
              placeholder="Search on Foodly"
              placeholderTextColor={darkgrey}
              value={searchTerm}
              onChangeText={(value) => setSearchTerm(value)}
              style={styles.textInput}
            />
          </View>
        </View>
        <Text variant="body" style={{ marginVertical: 10, marginLeft: 20 }}>
          {searchTerm && searchResults.length > 0
            ? "Results"
            : searchResults.length === 0
            ? ""
            : "Top Restaurants"}
        </Text>
        {searchResults.length > 0 ? (
          <View
            style={{
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
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text variant="headerText" style={{ marginBottom: 150 }}>
              No items found :(
            </Text>
          </View>
        )}
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
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: palewhite,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingRight: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
