import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const ProfileInformation = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ProfileInformation">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>ProfileInformation</Text>
    </View>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({
  container: {},
});
