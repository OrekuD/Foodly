import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { white } from "../../constants/Colors";
import { StackHeader, Text, TransparentButton } from "../../components";
import { width } from "../../constants/Layout";

const IMAGE_SIZE = width * 0.5;

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
      <StackHeader title="Payment Methods" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/payment-credit-card.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text variant="title2" style={{ textAlign: "center", width: "95%" }}>
          You don't have any cards set :(
        </Text>
        <Text
          variant="body"
          style={{ width: "80%", textAlign: "center", marginVertical: 10 }}
          color="grey"
        >
          It seems like you haven't added any credit or debit cards. You can add
          multiple cards
        </Text>
        <View style={styles.buttonContainer}>
          <TransparentButton label="Add credit cards" />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginVertical: 30,
    alignSelf: "center",
    marginRight: 50,
  },
  buttonContainer: {
    marginVertical: 30,
  },
});
