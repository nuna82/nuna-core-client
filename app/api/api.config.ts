import axios from "axios";

// Axios configuration
const api = axios.create({
    baseURL: process.env.VITE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

export default api