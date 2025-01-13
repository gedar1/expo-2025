import { View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot, SplashScreen, Stack } from "expo-router";

// Import your global CSS file
import "./global.css";
import React, { useEffect } from 'react'
import { useFonts } from "expo-font";


// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "FiraCode-Light": require("../assets/fonts/FiraCode-Light.ttf"),
    "FiraCode-Regular": require("../assets/fonts/FiraCode-Regular.ttf"),
    "FiraCode-Medium": require("../assets/fonts/FiraCode-Medium.ttf"),
    "WorkSans-Light": require('../assets/fonts/WorkSans-Light.ttf'),
    "WorkSans-Black": require('../assets/fonts/WorkSans-Black.ttf'),
    "WorkSans-Medium": require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    // <Slot />
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Slot />
    </GestureHandlerRootView>
    //<Stack />
  )
}

export default RootLayout