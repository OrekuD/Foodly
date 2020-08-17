import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";

const AddSocialAccount = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "AddSocialAccount">) => {
  const { setTabbarState } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>AddSocialAccount</Text>
    </View>
  );
};

export default AddSocialAccount;

const styles = StyleSheet.create({
  container: {},
});
