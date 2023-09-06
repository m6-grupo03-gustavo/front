import axios from "axios"

export const apiFipe = axios.create({
    baseURL: 'https://kenzie-kars.herokuapp.com',
    timeout: 5000
})