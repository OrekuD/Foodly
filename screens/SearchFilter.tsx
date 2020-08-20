import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, StackHeader } from "../components";
import { white } from "../constants/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

const SearchFilter = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SearchFilter">) => {
  return (
    <View style={styles.container}>
      <StackHeader title="Filters" onPress={navigation.goBack} filterHeader />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
