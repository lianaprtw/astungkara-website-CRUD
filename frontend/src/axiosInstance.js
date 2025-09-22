import axios from "axios";

export const guestBaseUrl = axios.create({
    baseURL: "http://localhost:8000/guest",
});