//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMenu: {
    position: "absolute",
    top: 12,
    left: 5,

    zIndex: 9,
  },
  buttonMenu: {
    justifyContent: "center",
    alignItems: "center",

    height: 70,
    width: 70,

    backgroundColor: "#ffffff",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
