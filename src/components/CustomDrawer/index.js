//React
import React, { useContext } from "react";

//React Navigation
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

//LinearGradient
import { LinearGradient } from "expo-linear-gradient";

//Context
import { WeatherContext } from "../../contexts/WeatherContext";

//Style
import { styles } from "./styles";

export default function CustomDrawer(props) {
  const { background } = useContext(WeatherContext);

  return (
    <LinearGradient style={styles.containerCustomDrawer} colors={background}>
      <DrawerContentScrollView style={styles.containerCustomDrawer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  );
}
