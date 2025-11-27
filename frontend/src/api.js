import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://plp-mern-week-6-1.onrender.com",
});
