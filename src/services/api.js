//Axios
import axios from "axios";

export const key = "9f406287";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
