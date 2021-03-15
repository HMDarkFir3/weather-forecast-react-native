//React
import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//LinearGradient
import { LinearGradient } from "expo-linear-gradient";

//Component
import Conditions from "../../components/Conditions";

//Context
import { WeatherContext } from "../../contexts/WeatherContext";

//Style
import { styles } from "./styles";

//Icon
import { Feather } from "@expo/vector-icons";

export default function Search() {
  const { input, setInput, background, city, error, getCity } = useContext(
    WeatherContext
  );

  const navigation = useNavigation();

  function handleSearch() {
    getCity();
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.containerSearch}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="chevron-left" color="#000000" size={32} />
        <Text style={styles.goBack}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Ex: Santos, SP"
          value={input}
          onChangeText={(value) => setInput(value)}
        />
        <TouchableOpacity style={styles.iconSearch} onPress={handleSearch}>
          <Feather name="search" color="#ffffff" size={22} />
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      {city && (
        <LinearGradient style={styles.header} colors={background}>
          <Text style={styles.date}>{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city_name}</Text>

          <Text style={styles.temp}>{city.results.temp}°C</Text>
          <View>
            <Conditions weather={city} />
          </View>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}
