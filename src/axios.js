import axios from "axios";

const UrlVariant = axios.create( {
    baseURL: "https://api.themoviedb.org/3/",
});

export default UrlVariant;