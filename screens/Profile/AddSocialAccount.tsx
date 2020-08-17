import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { white } from "../../constants/Colors";
import { StackHeader, Text, SocialButton } from "../../components";

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
      <StackHeader title="Add Social Accounts" onPress={navigation.goBack} />
      <View style={styles.content}>
        <Text
          variant="title2"
          style={{ marginVertical: 20, textAlign: "center" }}
        >
          Add social accounts
        </Text>
        <Text
          variant="body"
          color="grey"
          style={{
            textAlign: "center",
            width: "90%",
            alignSelf: "center",
            marginBottom: 40,
          }}
        >
          Add your social accounts for more security. You will go directly to
          their site
        </Text>
        <SocialButton variant="facebook" />
        <SocialButton variant="google" />
      </View>
    </View>
  );
};

export default AddSocialAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
