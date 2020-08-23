import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { useAppContext } from "../context/Context";
import { white, grey, green } from "../constants/Colors";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { Share, Dollar, Timer } from "../components/Svgs";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Text } from "../components";

const Product = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, "Product">) => {
  const { setTabbarState } = useAppContext();
  const { item } = route.params;
  const { id, name, price, tags, time, image, ratings } = item;
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
        <View style={styles.row}>
          {tags.map((tag, index) => {
            return (
              <View
                key={index}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text
                  variant="body"
                  color="darkgrey"
                  style={{ marginVertical: 5 }}
                  numberOfLines={1}
                >
                  {tag}
                </Text>
                {index !== tags.length - 1 && <View style={styles.dot} />}
              </View>
            );
          })}
        </View>
        <View style={styles.row}>
          <Text variant="caption" style={{ marginRight: 10 }}>
            {ratings?.average}
          </Text>
          <FontAwesome name="star" color={green} size={16} />
          <Text variant="caption" style={{ marginLeft: 10 }}>
            {ratings?.total}+ Ratings
          </Text>
        </View>
        <View
          style={{
            ...styles.row,
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View style={styles.section}>
            <View style={{ marginRight: 5, marginTop: 5 }}>
              <Dollar size={16} color={green} />
            </View>
            <View style={styles.col}>
              <Text variant="body">Free</Text>
              <Text variant="caption" color="darkgrey">
                Delivery
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={{ margin: 5 }}>
              <Timer size={16} color={green} />
            </View>
            <View style={styles.col}>
              <Text variant="body">{time.slice(0, 2)}</Text>
              <Text variant="caption" color="darkgrey">
                Minutes
              </Text>
            </View>
          </View>
          <RectButton style={styles.button}>
            <View style={styles.button}>
              <Text
                variant="subhead"
                color="green"
                style={{ textTransform: "uppercase" }}
              >
                Take away
              </Text>
            </View>
          </RectButton>
        </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: grey,
    marginHorizontal: 5,
    marginTop: 5,
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth * 2.5,
    borderColor: green,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flexDirection: "row",
  },
  col: {
    height: 50,
    justifyContent: "space-between",
    // paddingVertical: 2,
  },
});
