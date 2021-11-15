import axios from "axios";

const variant = axios.create( {
    baseURL: "https://api.themoviedb.org/3/",
});

export default variant;