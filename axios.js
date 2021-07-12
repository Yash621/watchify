import axios from "axios";
const key =
  "https://api.themoviedb.org/3/movie/550?api_key=7acc7914fec1d517be4b0f9e1604090f";

const instance = axios.instance({ baseURL: key });

export default instance;
