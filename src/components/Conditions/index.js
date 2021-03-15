//React
import React from "react";
import { View, Text } from "react-native";

//Style
import { styles } from "./styles";

//Icon
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Conditions({ weather }) {
  return (
    <View style={styles.containerConditions}>
      <View style={styles.areaConditions}>
        <Feather name="wind" size={23} color="#1ed6ff" />
        <Text>{weather.results.wind_speedy}</Text>
      </View>

      <View style={styles.areaConditions}>
        <MaterialCommunityIcons
          name="weather-sunset-up"
          size={23}
          color="#1ed6ff"
        />
        <Text>{weather.results.sunrise}</Text>
      </View>

      <View style={styles.areaConditions}>
        <MaterialCommunityIcons
          name="weather-sunset-down"
          size={23}
          color="#1ed6ff"
        />
        <Text>{weather.results.sunset}</Text>
      </View>

      <View style={styles.areaConditions}>
        <Feather name="droplet" size={23} color="#1ed6ff" />
        <Text>{weather.results.humidity}</Text>
      </View>
    </View>
  );
}
