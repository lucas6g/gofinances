

import React from "react";
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import AppLoading from "expo-app-loading";

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins"
import { SafeAreaView, StatusBar } from "react-native";

import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";





export default function App() {

  const [fonstsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })


  if (!fonstsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <NavigationContainer>
          <AppRoutes />

        </NavigationContainer>


      </SafeAreaView>


    </ThemeProvider>
  )
}
