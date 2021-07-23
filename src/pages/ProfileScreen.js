import { useEffect } from "react";
import NavBar from "../components/NavBar";
import "../styles/profileScreen.css";

function ProfileScreen({ com }) {
  useEffect(() => {
    if (com === true) {
      console.log("true");
    } else {
      console.log("false");
    }
  });

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <hr className="line" />
        <div className="lower_body">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
            className="avatar"
          />
          <div className="payment_plan">
            <div className="pay_email">
              <p>yg17381@gmail.com</p>
            </div>
            <div className="plans">
              <h4>Plans (Current Plan: premium)</h4>
            </div>
            <hr className="line lineb" />
            <div className="renewal_date">
              <p>Renewal date: 04/07/2021</p>
            </div>
            <div className="standard">
              <div>
                <p className="text_size">Netflix Standard</p>
                <p className="text_size_lower">1080p</p>
              </div>

              <button className="standard_button">Subscribe</button>
            </div>
            <div className="basic">
              <div>
                {" "}
                <p className="text_size">Netflix basic</p>
                <p className="text_size_lower">480p</p>
              </div>

              <button className="basic_button">Subscribe</button>
            </div>
            <div className="premium">
              <div>
                {" "}
                <p className="text_size">Netflix Premium</p>
                <p className="text_size_lower">4K+HDR</p>
              </div>

              <button className="premium_button">Subscribe</button>
            </div>
            <div className="sign_out">
              <button className="sign_out_button">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
