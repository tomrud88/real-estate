import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-api-tom-team-b3886c19.vercel.app/api/",
  withCredentials: true,
});

export default apiRequest;
