import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Text } from "../components";
import { white } from "../constants/Colors";

interface SearchProps {}

const Search = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Main">) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SearchFilter")}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
});
