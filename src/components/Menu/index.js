//React
import React from "react";
import { View, TouchableOpacity } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMenu}>
      <TouchableOpacity
        style={styles.buttonMenu}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={36} color="#373737" />
      </TouchableOpacity>
    </View>
  );
}
