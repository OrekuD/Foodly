import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const Locations = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Locations">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Locations</Text>
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({
  container: {},
});
