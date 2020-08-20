import React, { useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useAppContext } from "../../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../types";
import { white, red, green, lightgrey } from "../../constants/Colors";
import { Text, StackHeader, Button } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

const ProfileSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fullname: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(12, "Password is too long")
    .required(),
});

const ProfileInformation = ({
  navigation,
}: StackScreenProps<ProfileStackParamList, "ProfileInformation">) => {
  const { setTabbarState, addUserDetails, user } = useAppContext();

  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);

  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: user,
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      addUserDetails({
        fullname: values.fullname,
        email: values.email,
        phone: values.phone,
        password: user.password,
      });
    },
  });

  return (
    <View style={styles.container}>
      <StackHeader title="Profile Information" onPress={navigation.goBack} />
      <View style={styles.content}>
        <View style={styles.section}>
          <Text
            variant="caption"
            style={{ textTransform: "uppercase", letterSpacing: 1 }}
            color="grey"
          >
            full name
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange("fullname")}
              onBlur={handleBlur("fullname")}
              value={values.fullname}
            />
            {touched.fullname ? (
              errors.fullname ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <View style={styles.section}>
          <Text
            variant="caption"
            style={{ textTransform: "uppercase", letterSpacing: 1 }}
            color="grey"
          >
            email address
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email ? (
              errors.email ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <View style={styles.section}>
          <Text
            variant="caption"
            style={{ textTransform: "uppercase", letterSpacing: 1 }}
            color="grey"
          >
            phone number
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
            />
            {touched.phone ? (
              errors.phone ? (
                <Ionicons name="ios-close" color={red} size={28} />
              ) : (
                <Ionicons name="ios-checkmark" color={green} size={28} />
              )
            ) : null}
          </View>
        </View>
        <Button label="Change settings" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  textInputContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: lightgrey,
    paddingRight: 5,
    paddingTop: 10,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    height: "90%",
    fontSize: 18,
    fontFamily: "SFProDisplay-Regular",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
