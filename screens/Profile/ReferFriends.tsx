import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Share, Alert } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { white, lightgrey } from "../../constants/Colors";
import { StackHeader, Text, Button, TransparentButton } from "../../components";
import { width } from "../../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMAGE_SIZE = width * 0.5;

const ReferFriends = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ReferFriends">) => {
  const [link, setLink] = useState<string>("https://somelink.com/gftdsxcvb");
  const { setTabbarState } = useAppContext();
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);

  const shareProductDetails = async () => {
    try {
      const result = await Share.share({
        message: `I think you would love Foodly. Click this link to sign up! \n\n${link}`,
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     console.log("Trying");
      //   } else {
      //     console.log("Succesfully shared referal link");
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   console.log("Dimissed");
      // }
    } catch (error) {
      Alert.alert("Share", "There was an issue sharing your product");
    }
  };

  return (
    <View style={styles.container}>
      <StackHeader title="Refer to Friends" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/refer-reward.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text variant="title2" style={{ textAlign: "center" }}>
          Refer a Friend, Get $10
        </Text>
        <Text
          variant="body"
          style={{ width: "80%", textAlign: "center", marginVertical: 10 }}
          color="grey"
        >
          Get $10 in credits when someone signs up using your link
        </Text>
        <Text
          variant="body"
          style={{
            width: "80%",
            textAlign: "center",
            marginVertical: 10,
            backgroundColor: lightgrey,
            padding: 14,
            borderRadius: 5,
          }}
        >
          {link}
        </Text>
      </View>
      <View style={{ ...styles.buttons, paddingBottom: bottom }}>
        <Button label="email" />
        <TransparentButton label="others" onPress={shareProductDetails} />
      </View>
    </View>
  );
};

export default ReferFriends;

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
  buttons: {
    height: 160,
    justifyContent: "space-evenly",
  },
});
