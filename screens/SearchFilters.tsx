import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, StackHeader, Button } from "../components";
import { white, green, palewhite } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList, SearchFilter } from "../types";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useAppContext } from "../context/Context";

const filters = ["all", "burgers", "chinese", "fruits", "soups", "sandwich"];
const diets = ["any", "vegetarian", "vegan", "gluten-free"];
const priceRanges = [
  "0 - 20",
  "20 - 40",
  "40 - 60",
  "60 - 80",
  "80 - 100",
  "100+",
];

const SearchFilters = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SearchFilters">) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [activeDietaryIndex, setActiveDietaryIndex] = useState<number>(0);
  const [activePriceRangeIndex, setActivePriceRangeIndex] = useState<number>(1);

  return (
    <View style={styles.container}>
      <StackHeader title="Filters" onPress={navigation.goBack} filterHeader />
      <ScrollView>
        <View style={styles.content}>
          <Text variant="subhead" color="darkgrey">
            CATEGORIES
          </Text>
          <View style={styles.categories}>
            {filters.map((filter, index) => (
              <RectButton
                style={{
                  ...styles.badge,
                  backgroundColor:
                    activeCategoryIndex === index ? green : palewhite,
                }}
                key={index}
                onPress={() => setActiveCategoryIndex(index)}
              >
                <Text
                  variant="title1"
                  color={activeCategoryIndex === index ? "white" : "darkgrey"}
                >
                  {filter.toUpperCase()}
                </Text>
              </RectButton>
            ))}
          </View>
          <Text variant="subhead" color="darkgrey">
            DIETARY
          </Text>
          <View style={styles.categories}>
            {diets.map((diet, index) => (
              <RectButton
                style={{
                  ...styles.badge,
                  backgroundColor:
                    activeDietaryIndex === index ? green : palewhite,
                }}
                key={index}
                onPress={() => setActiveDietaryIndex(index)}
              >
                <Text
                  variant="title1"
                  color={activeDietaryIndex === index ? "white" : "darkgrey"}
                >
                  {diet.toUpperCase()}
                </Text>
              </RectButton>
            ))}
          </View>
          <Text variant="subhead" color="darkgrey">
            PRICE RANGE
          </Text>
          <View style={styles.categories}>
            {priceRanges.map((priceRange, index) => (
              <RectButton
                style={{
                  ...styles.price,
                  backgroundColor:
                    activePriceRangeIndex === index ? green : palewhite,
                  borderRadius: 50,
                }}
                key={index}
                onPress={() => setActivePriceRangeIndex(index)}
              >
                <Text
                  variant="title1"
                  color={activePriceRangeIndex === index ? "white" : "darkgrey"}
                >
                  {priceRange}
                </Text>
              </RectButton>
            ))}
          </View>
          <View style={{ marginTop: 30 }}>
            <Button label="apply filters" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchFilters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  badge: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginBottom: 15,
  },
  content: {
    padding: 20,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 15,
  },
  price: {
    height: 70,
    width: 70,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginBottom: 15,
  },
});
