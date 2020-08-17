import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const PaymentMethods = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "PaymentMethods">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>PaymentMethods</Text>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  container: {},
});
