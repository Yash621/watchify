import "../styles/Banner.css";
import API_KEY from "../request";
import instance from "../axios";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(
        `/discover/tv?api_key=${API_KEY}&with_networks=213`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="banner">
      <img
        className="bannerImg"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="helu friend"
      />
      <div className="banner_contents">
        <h3 className="banner_title">{movie?.title || movie?.original_name}</h3>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner--fadebottom"></div>
    </div>
  );
}

export default Banner;
