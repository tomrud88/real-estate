import axios from "axios";

const apiRequest = axios.create({
  baseURL: "real-estate-api-beige.vercel.app",
  withCredentials: true,
});

export default apiRequest;
