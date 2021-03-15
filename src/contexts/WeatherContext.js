//React
import React, { createContext, useState, Keyboard } from "react";

//Location
import * as Location from "expo-location";

//Util
import { conditionWeatherContext } from "../utils/conditionWeatherContext";

//Api
import api, { key } from "../services/api";

export const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#ffffff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);
  const [backgroundDrawer, setBackgroundDrawer] = useState(["#1ed6ff"]);

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getLocation() {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      setError("Permissão negada para acessar a localização.");
      setLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    const res = await api.get(
      `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );

    setWeather(res.data);

    if (res.data.results.currently === "noite") {
      setBackground(["#0c3741", "#0f2f61"]);
      setBackgroundDrawer(["#0f2f61"]);
    }

    let icon = conditionWeatherContext(res.data.results.condition_slug);

    setIcon(icon);

    setLoading(false);
  }

  async function getCity() {
    const res = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (res.data.by === "defualt") {
      setError("Cidade não encontrada.");
      setInput("");
      setCity(null);

      return;
    }

    setCity(res.data);
    setInput("");
  }

  return (
    <WeatherContext.Provider
      value={{
        weather,
        icon,
        setIcon,
        background,
        backgroundDrawer,
        input,
        setInput,
        city,
        loading,
        error,
        getLocation,
        getCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
