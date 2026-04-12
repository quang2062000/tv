import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default axiosClient;