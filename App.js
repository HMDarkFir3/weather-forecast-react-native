//React
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Route
import Routes from "./src/routes";

//Context
import { WeatherProvider } from "./src/contexts/WeatherContext";

export default function App() {
  return (
    <NavigationContainer>
      <WeatherProvider>
        <StatusBar />
        <Routes />
      </WeatherProvider>
    </NavigationContainer>
  );
}
