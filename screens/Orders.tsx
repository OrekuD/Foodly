import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface OrdersProps {}

const Orders = (props: OrdersProps) => {
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {},
});
