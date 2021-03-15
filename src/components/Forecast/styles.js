//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerForecast: {
    alignItems: "center",
    justifyContent: "space-around",

    marginLeft: 9,
    marginRight: 11,
    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  date: {
    fontSize: 14,
  },
  temp: {
    alignItems: "center",
  },
  min: {
    fontSize: 14,
  },
  max: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
