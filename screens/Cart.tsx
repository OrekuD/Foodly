import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, StackHeader, CartCard, Button } from "../components";
import { white, lightgrey, grey, green } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { OrdersStackParamList } from "../types";
import { DELIVERY } from "../constants/Payment";
import { calculateOrderTotal } from "../utils/calculateOrderTotal";
import Modal from "react-native-modal";
import { width, height } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

const MODAL_WIDTH = width * 0.85;
const CHECK_MARK_CONTAINER_SIZE = 65;

const Cart = ({
  navigation,
}: StackScreenProps<OrdersStackParamList, "Cart">) => {
  const { setTabbarState, cart, cartTotal, manageCart } = useAppContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: white }}>
      <Modal
        isVisible={isVisible}
        style={{ margin: 0, alignItems: "center", justifyContent: "center" }}
        backdropTransitionOutTiming={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => setIsVisible(false)}
        onBackButtonPress={() => setIsVisible(false)}
      >
        <View style={styles.modalContent}>
          <View style={styles.checkMarkContainer}>
            <Ionicons name="md-checkmark" color={white} size={26} />
          </View>
          <Text
            variant="cardText"
            style={{ width: "75%", textAlign: "center" }}
          >
            You have placed the order successfully
          </Text>
          <Text
            variant="body"
            color="grey"
            style={{ width: "85%", textAlign: "center", marginVertical: 10 }}
          >
            Your order has been placed successfully. Your food will be delivered
            within 30 minutes. Thanks for using our service. Enjoy your food :)
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              manageCart("EMPTY_CART");
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: "Home" }],
                })
              );
            }}
          >
            <Text
              variant="caption"
              color="green"
              style={{ textTransform: "uppercase", marginTop: 10 }}
            >
              Keep browsing
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <StackHeader title="Cart" onPress={navigation.goBack} />
      {cart.length > 0 ? (
        <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
          {cart.map((product, index) => (
            <CartCard product={product} key={index} />
          ))}
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text variant="body">Subtotal</Text>
            <Text variant="body">${cartTotal}</Text>
          </View>
          <View style={styles.row}>
            <Text variant="body">Delivery</Text>
            <Text variant="body">${DELIVERY}</Text>
          </View>
          <View style={styles.row}>
            <Text variant="body">Total (incl. VAT)</Text>
            <Text variant="cardText">${calculateOrderTotal(cartTotal)}</Text>
          </View>
          <View
            style={{ ...styles.separator, marginBottom: 40, marginTop: 10 }}
          />
          <Button label="Checkout" onPress={() => setIsVisible(true)} />
        </View>
      ) : (
        <Text variant="body" style={{ marginTop: 140, textAlign: "center" }}>
          You cart is empty
        </Text>
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth * 3,
    backgroundColor: lightgrey,
    marginVertical: 5,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  modalContent: {
    width: MODAL_WIDTH,
    borderRadius: 15,
    backgroundColor: white,
    position: "relative",
    paddingVertical: CHECK_MARK_CONTAINER_SIZE,
    alignItems: "center",
  },
  checkMarkContainer: {
    position: "absolute",
    height: CHECK_MARK_CONTAINER_SIZE,
    width: CHECK_MARK_CONTAINER_SIZE,
    top: -CHECK_MARK_CONTAINER_SIZE / 2,
    left: MODAL_WIDTH / 2 - CHECK_MARK_CONTAINER_SIZE / 2,
    borderRadius: CHECK_MARK_CONTAINER_SIZE / 2,
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
  },
});
