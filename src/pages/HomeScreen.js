import "../styles/HomeScreen.css";
import Nav from "../components/NavBar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import API_KEY from "../request";


function HomeScreen() {
  const isLargeRow = true;
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchURL={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
        isLargeRow={isLargeRow}
      />
      <Row
        title="Top Rated"
        fetchURL={`/movie/top_rated?api_key=${API_KEY}&with_networks=213`}
      />
      <Row
        title="Action Movies"
        fetchURL={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <Row
        title="Comedy Movies"
        fetchURL={`/discover/movie?api_key=${API_KEY}&with_genres=35`}
      />
      <Row
        title="Horror Movies"
        fetchURL={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <Row
        title="Romance Movies"
        fetchURL={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
      <Row
        title="Documentaries"
        fetchURL={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
      />
    </div>
  );
}

export default HomeScreen;
