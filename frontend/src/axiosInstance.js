import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/" });
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     console.log(localStorage.getItem("token"));
//     if (localStorage.getItem("token")) {
//       const token = localStorage.getItem("token");
//       console.log(token);
//       //   req.headers.authorization = `Bearer ${token}`;
//     }
//   }

//   return req;
// });

export default API;
