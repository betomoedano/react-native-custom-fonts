import { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    InterSemiBoldItalic:
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
    Ultra: require("./assets/fonts/Ultra-Regular.ttf"),
    Dyna: require("./assets/fonts/DynaPuff.ttf"),
    RubikMazeRegular: require("./assets/fonts/RubikMazeRegular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={{ fontFamily: "Ultra", fontSize: 40 }}>Code With Beto</Text>
      <Text style={{ fontFamily: "Dyna", fontSize: 40 }}>Code With Beto</Text>
      <Text style={{ fontFamily: "RubikMazeRegular", fontSize: 40 }}>
        Code With Beto
      </Text>
      <Text style={{ fontFamily: "Inter_900Black", fontSize: 40 }}>
        Code With Beto
      </Text>
      <Text style={{ fontFamily: "InterSemiBoldItalic", fontSize: 40 }}>
        Code With Beto
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
