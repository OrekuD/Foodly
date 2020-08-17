import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const ReferFriends = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ReferFriends">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>ReferFriends</Text>
    </View>
  );
};

export default ReferFriends;

const styles = StyleSheet.create({
  container: {},
});
