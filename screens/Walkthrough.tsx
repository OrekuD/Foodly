import React, { useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { Button, Slide } from "../components";
import { white, green } from "../constants/Colors";
import { width } from "../constants/Layout";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { slides } from "../data/walkthrough";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

const Walkthrough = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Walkthrough">) => {
  const { top, bottom } = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <View style={styles.slides}>
        <Animated.ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {slides.map((slide, index) => {
            return <Slide key={index} first={index === 0} slide={slide} />;
          })}
        </Animated.ScrollView>
      </View>
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={index}
              style={{ ...styles.pageIndicator, opacity }}
            />
          );
        })}
      </View>
      <View style={{ ...styles.bottomTab, paddingBottom: bottom }}>
        <Button
          label="get started"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  pagination: {
    height: 40,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pageIndicator: {
    width: 10,
    height: 6,
    borderRadius: 4,
    backgroundColor: green,
    marginHorizontal: 5,
  },
  slides: {
    flex: 1,
  },
  bottomTab: {
    height: 170,
    width: width,
    justifyContent: "center",
  },
});
