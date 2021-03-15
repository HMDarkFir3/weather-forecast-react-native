//React
import React, { useEffect, useContext } from "react";
import { Text, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

//LinearGradient
import { LinearGradient } from "expo-linear-gradient";

//Component
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";

//Context
import { WeatherContext } from "../../contexts/WeatherContext";

//Style
import { styles } from "./styles";

//Icon
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const { weather, icon, background, loading, error, getLocation } = useContext(
    WeatherContext
  );

  useEffect(() => {
    getLocation();
  }, []);

  if (loading) {
    return (
      <LinearGradient style={styles.containerLoading} colors={background}>
        <Ionicons name="cloud" color="#ffffff" size={150} />
        <ActivityIndicator color="#ffffff" size="large" />
        <Text style={styles.loadingText}>Carregando dados...</Text>
      </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={styles.containerHome}>
      <Menu />
      <Header background={background} weather={weather} icon={icon} />
      <Conditions weather={weather} />
      <FlatList
        style={styles.list}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        showsHorizontalScrollIndicator={false}
        data={weather.results.forecast}
        keyExtrator={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}
