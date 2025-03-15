import axios from "axios"

export const api = axios.create ({
    timeout: 600000,
    baseURL: "https://api-mong-db-yp8x.onrender.com"
});