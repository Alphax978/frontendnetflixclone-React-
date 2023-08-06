import axios from "axios";

// base url that we will be using to make movie requests
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;





