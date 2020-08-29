import React, { useEffect, createRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { white, grey, palewhite } from "../../constants/Colors";
import { StackHeader, Text } from "../../components";
import { width } from "../../constants/Layout";
import { Marker } from "../../components/Svgs";

const Locations = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "Locations">) => {
  const { setTabbarState } = useAppContext();
  const textInputRef = createRef<TextInput>();
  const [address, setAddress] = useState<string[]>([
    "Spintext, Accra",
    "Tema, Accra",
    "Logon, Accra",
  ]);
  const [newAddress, setNewAddress] = useState<string>("");

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <ScrollView style={{ backgroundColor: white }}>
      <StackHeader title="Locations" onPress={navigation.goBack} />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() => textInputRef.current?.focus()}
          activeOpacity={0.8}
          style={styles.addressButton}
        >
          <View style={{ marginHorizontal: 20, marginTop: 1 }}>
            <Marker size={20} color={grey} />
          </View>
          <TextInput
            placeholder="Enter a new address"
            placeholderTextColor={grey}
            style={styles.textInput}
            ref={textInputRef}
            value={newAddress}
            onChangeText={(text) => setNewAddress(text)}
            onSubmitEditing={() => setAddress([newAddress, ...address])}
          />
        </TouchableOpacity>
        <View style={styles.row}>
          <Text
            variant="headerText"
            color="darkgrey"
            style={{ textTransform: "uppercase" }}
          >
            RECENT ADDRESS
          </Text>

          <TouchableOpacity activeOpacity={0.6} onPress={() => setAddress([])}>
            <Text
              variant="caption"
              style={{ textTransform: "uppercase", letterSpacing: 1 }}
            >
              clear all
            </Text>
          </TouchableOpacity>
        </View>
        {address.length > 0 ? (
          <>
            {address.map((name, index) => (
              <View style={styles.address} key={index}>
                <View style={{ marginRight: 20, marginTop: 1 }}>
                  <Marker size={20} color={grey} />
                </View>
                <Text variant="body">{name}</Text>
              </View>
            ))}
          </>
        ) : (
          <Text variant="cardText">No address set</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Locations;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0,
    fontSize: 22,
    height: "90%",
  },
  addressButton: {
    width: width * 0.9,
    height: 50,
    borderColor: grey,
    borderWidth: 1,
    backgroundColor: palewhite,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  address: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
