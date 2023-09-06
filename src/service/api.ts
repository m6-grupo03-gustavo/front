import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api-cars-z369.onrender.com/',
    timeout: 5000
})