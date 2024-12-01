import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_BASE_URL || "http://localhost:3005",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
