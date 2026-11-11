import axios from "axios";

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    if (!API_KEY) {
        return Promise.reject(
            new Error("Missing VITE_PIXABAY_API_KEY. Add your Pixabay API key to the .env file.")
        );
    }

    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    return axios.get(BASE_URL, { params })
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error fetching images:", error);
            throw error;
        });
}
