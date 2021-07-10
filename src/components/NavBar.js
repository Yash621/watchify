import { useEffect, useState } from "react";
import "../styles/nav.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav_contents ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="helu friend"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
        className="nav_avatar"
      />
    </div>
  );
}

export default NavBar;
