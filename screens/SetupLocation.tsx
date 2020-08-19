import React, { createRef } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { white, black, green, palewhite, grey } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../components";
import { width } from "../constants/Layout";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useAppContext } from "../context/Context";
import { MarkerArrow, Marker } from "../components/Svgs";

const SetupLocation = ({
  navigation,
}: StackScreenProps<RootStackParamList, "SetupLocation">) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const { setUserState } = useAppContext();
  const textInputRef = createRef<TextInput>();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <BorderlessButton style={styles.closeButton}>
        <Ionicons name="ios-close" color={black} size={36} />
      </BorderlessButton>
      <Text variant="title2" style={{ alignSelf: "center", marginBottom: 20 }}>
        Find restaurants near you
      </Text>
      <Text variant="body" color="grey" style={{ textAlign: "center" }}>
        Please enter your location or allow access to your location to find
        restaurants near you
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.locationButton}>
        <MarkerArrow size={20} color={green} />
        <Text variant="body" color="green" style={{ marginLeft: 20 }}>
          Use current location
        </Text>
      </TouchableOpacity>
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
          onSubmitEditing={() => {
            navigation.navigate("Main");
            setUserState(true);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SetupLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 20,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  locationButton: {
    width: width * 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
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
  textInput: {
    borderWidth: 0,
    fontSize: 22,
    height: "90%",
  },
});
