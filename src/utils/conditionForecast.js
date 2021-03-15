export function conditionForecast(condition) {
  let icon;

  switch (condition) {
    //Tempestade
    case "storm":
      return (icon = {
        name: "lightning",
        color: "#1ec9ff",
      });

    //Neve
    case "snow":
      return (icon = {
        name: "snowflake-8",
        color: "#a6dced",
      });

    //Chuva
    case "rain":
      return (icon = {
        name: "rain",
        color: "#1ec9ff",
      });

    //Neblina
    case "fog":
      return (icon = {
        name: "fog",
        color: "#d3d3d3",
      });

    //Dia limpo
    case "clear_day":
      return (icon = {
        name: "day-sunny",
        color: "#ffb300",
      });

    //Noite limpa
    case "clear_night":
      return (icon = {
        name: "night-clear",
        color: "#0f2f61",
      });

    //Nuvem
    case "cloud":
      return (icon = {
        name: "cloudy",
        color: "#1ec9ff",
      });

    //Dia nublado
    case "cloudly_day":
      return (icon = {
        name: "day-cloudy",
        color: "#ffb300",
      });

    //Noite nublado
    case "cloudly_night":
      return (icon = {
        name: "night-alt-cloudy",
        color: "#0f2f61",
      });

    //Erro dia
    case "none_day":
      return (icon = {
        name: "day-sunny",
        color: "#ffb300",
      });

    //Erro noite
    case "none_night":
      return (icon = {
        name: "night-clear",
        color: "#0f2f61",
      });

    //Default
    default:
      return (icon = {
        name: "cloudy",
        color: "#1ec9ff",
      });
  }
}
