import "../styles/HomeScreen.css";
import Nav from "../components/NavBar";
import Banner from "../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
