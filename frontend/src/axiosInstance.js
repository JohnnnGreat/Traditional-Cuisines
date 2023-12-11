import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/" });

//Production Url : https://soulfood.onrender.com
export default API;
