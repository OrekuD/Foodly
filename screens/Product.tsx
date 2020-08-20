import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { useAppContext } from "../context/Context";
import { white } from "../constants/Colors";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Share } from "../components/Svgs";
import { BorderlessButton } from "react-native-gesture-handler";
import { Text } from "../components";

const Product = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, "Product">) => {
  const { setTabbarState } = useAppContext();
  const { item } = route.params;
  const { id, name, rating, price, tags, time, image } = item;
  const { top } = useSafeAreaInsets();
  useEffect(() => {
    setTabbarState(false);

    return () => setTabbarState(true);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <View style={{ ...styles.header, top: top + 10 }}>
          <BorderlessButton onPress={navigation.goBack}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={white}
              size={34}
            />
          </BorderlessButton>
          <View style={styles.iconRow}>
            <BorderlessButton>
              <Share size={20} color={white} />
            </BorderlessButton>
            <BorderlessButton>
              <Feather
                name="search"
                color={white}
                size={26}
                style={{ marginLeft: 15 }}
              />
            </BorderlessButton>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text variant="title2">{name}</Text>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: width,
    height: 300,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
