import axios from "axios";

const API_KEY = "57502012-ee4b45b608b98ab265fc038c4";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    return axios.get(BASE_URL, { params })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Error fetching images:", error);
        })
    
}
