import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../Text";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { black } from "../../constants/Colors";

interface StackHeaderProps {
  title: string;
  onPress: () => void;
  filterHeader?: boolean;
}

const StackHeader = ({ title, onPress, filterHeader }: StackHeaderProps) => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: filterHeader ? 0 : paddingTop,
        height: filterHeader ? 80 : 110,
      }}
    >
      <BorderlessButton onPress={onPress}>
        <MaterialCommunityIcons name="chevron-left" color={black} size={36} />
      </BorderlessButton>
      <View style={styles.textContainer}>
        <Text variant="headerText" style={{ textAlign: "center" }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
