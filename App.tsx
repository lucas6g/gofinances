

import React from "react";
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import AppLoading from "expo-app-loading";

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins"
import { SafeAreaView, StatusBar } from "react-native";

import { AuthProvider } from "./src/context/AuthContext";
import { Routes } from './src/routes'




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
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <AuthProvider>
          <Routes />
        </AuthProvider>

      </SafeAreaView>


    </ThemeProvider>
  )
}
