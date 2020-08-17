import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const ChangePassword = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ChangePassword">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>ChangePassword</Text>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {},
});
