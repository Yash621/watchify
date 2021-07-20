import "/home/yash/Documents/webDevClones/watchify/src/styles/login.css";

function Login() {
  return (
    <div className="login_screen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="login_button">Sign In</button>
      </div>
      <div className="login_gradient" />
      <div className="login_body">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <div className="login_body_child">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="input_box">
            <input
              type=""
              placeholder="Email address"
              className="login_input"
            />
            <button className="get_started">
              <div className="get">
                <h2>Get Started </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
