import axios from "axios";
const key = "https://api.themoviedb.org/3";

const instance = axios.create({ baseURL: key });

export default instance;
