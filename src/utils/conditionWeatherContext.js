export function conditionWeatherContext(condition) {
  let icon;

  switch (condition) {
    //Tempestade
    case "storm":
      return (icon = {
        name: "lightning",
        color: "#ffffff",
      });

    //Neve
    case "snow":
      return (icon = {
        name: "snowflake-8",
        color: "#ffffff",
      });

    //Chuva
    case "rain":
      return (icon = {
        name: "rain",
        color: "#ffffff",
      });

    //Neblina
    case "fog":
      return (icon = {
        name: "fog",
        color: "#ffffff",
      });

    //Dia limpo
    case "clear_day":
      return (icon = {
        name: "day-sunny",
        color: "#ffffff",
      });

    //Noite limpa
    case "clear_night":
      return (icon = {
        name: "night-clear",
        color: "#ffffff",
      });

    //Nuvem
    case "cloud":
      return (icon = {
        name: "cloudy",
        color: "#ffffff",
      });

    //Dia nublado
    case "cloudly_day":
      return (icon = {
        name: "day-cloudy",
        color: "#ffffff",
      });

    //Noite nublado
    case "cloudly_night":
      return (icon = {
        name: "night-alt-cloudy",
        color: "#ffffff",
      });

    //Erro dia
    case "none_day":
      return (icon = {
        name: "day-sunny",
        color: "#ffffff",
      });

    //Erro noite
    case "none_night":
      return (icon = {
        name: "night-clear",
        color: "#ffffff",
      });

    //Default
    default:
      return (icon = {
        name: "cloudy",
        color: "#ffffff",
      });
  }
}
