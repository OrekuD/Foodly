import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
          "SFProDisplay-Bold": require("../assets/fonts/SFProDisplay-Bold.ttf"),
          "SFProDisplay-Regular": require("../assets/fonts/SFProDisplay-Regular.ttf"),
          "SFProDisplay-SemiBold": require("../assets/fonts/SFProDisplay-SemiBold.ttf"),
          "SFProDisplay-Medium": require("../assets/fonts/SFProDisplay-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
