import axios from "axios";

const environment = process.env.NODE_ENV;
const API = axios.create({
  baseURL:
    environment === "development"
      ? "http://localhost:8080/"
      : "https://soulfood.onrender.com/",
});

//Production Url : https://soulfood.onrender.com
export default API;
