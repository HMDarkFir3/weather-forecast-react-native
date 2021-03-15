//React
import React from "react";
import { Text } from "react-native";

//LinearGradient
import { LinearGradient } from "expo-linear-gradient";

//Style
import { styles } from "./styles";

//Icon
import { Fontisto } from "@expo/vector-icons";

export default function Header({ background, weather, icon }) {
  return (
    <LinearGradient style={styles.containerHeader} colors={background}>
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city_name}</Text>
      <Fontisto name={icon.name} color={icon.color} size={150} />
      <Text style={styles.temp}>{weather.results.temp}°C</Text>
    </LinearGradient>
  );
}
