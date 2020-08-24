import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, MainHeader, OrdersCard } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { width } from "../constants/Layout";
import { lightgrey, white } from "../constants/Colors";
import {
  pastOrders as _pastOrders,
  upcomingOrders as _upcomingOrders,
} from "../data/orders";
import { Product } from "../types";

interface OrdersProps {}

const Orders = (props: OrdersProps) => {
  const { top: height } = useSafeAreaInsets();
  const [pastOrders, setPastOrders] = useState<Product[]>(_pastOrders);
  const [upcomingOrders, setUpcomingOrders] = useState<Product[]>(
    _upcomingOrders
  );
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <View>
          <Text variant="headline" style={{ margin: 20, marginBottom: 0 }}>
            Orders
          </Text>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text
                variant="headerText"
                color="darkgrey"
                style={{ textTransform: "uppercase" }}
              >
                UPCOMING ORDERS
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setUpcomingOrders([])}
              >
                <Text
                  variant="caption"
                  style={{ textTransform: "uppercase", letterSpacing: 1 }}
                >
                  CLEAR ALL
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {upcomingOrders.map((order, index) => (
                <OrdersCard key={index} order={order} />
              ))}
            </ScrollView>
            {pastOrders.length > 0 && (
              <View style={styles.row}>
                <Text
                  variant="headerText"
                  color="darkgrey"
                  style={{ textTransform: "uppercase" }}
                >
                  past orders
                </Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setPastOrders([])}
                >
                  <Text
                    variant="caption"
                    style={{ textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    Clear all
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <ScrollView>
              {pastOrders.map((order, index) => (
                <OrdersCard key={index} order={order} pastOrders />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    height: 80,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: lightgrey,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
