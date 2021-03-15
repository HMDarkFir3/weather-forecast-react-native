//React
import React from "react";
import { View, Text } from "react-native";

//Util
import { conditionForecast } from "../../utils/conditionForecast";

//Style
import { styles } from "./styles";

//Icon
import { Fontisto } from "@expo/vector-icons";

export default function Forecast({ data }) {
  let icon = conditionForecast(data.condition);

  return (
    <View style={styles.containerForecast}>
      <Text style={styles.date}>{data.date}</Text>

      <Fontisto name={icon.name} size={25} color={icon.color} />

      <View style={styles.temp}>
        <Text style={styles.min}>{data.min}°</Text>
        <Text style={styles.max}>{data.max}°</Text>
      </View>
    </View>
  );
}
