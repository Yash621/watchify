import "../styles/Banner.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="banner">
      <img
        src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcOEvJUBQrHJE7yuOeGsgkJ8ugk_H61kTiXkV3_dH9U6BAZd-hUGXR7-CsW9iY-kYhLmQSKXd9baZWdo5JNyvv58fikK.webp?r=993"
        className="bannerImg"
        alt="helu friend"
      />
      <div className="banner_contents">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            "This is the description This is the description This is the description This is the description This is the description This is the description This is the descriptionThis is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description",
            150
          )}
        </h1>
      </div>
      {/* <div className="banner--fadebottom"></div> */}
    </div>
  );
}

export default Banner;
