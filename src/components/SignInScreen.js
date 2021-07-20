import "/home/yash/Documents/webDevClones/watchify/src/styles/signupscreen.css";

function SignInScreen() {
  return (
    <div className="signupScreen">
      <h1>Sign In</h1>
      <input
        placeholder="Email or phone number"
        type="email"
        className="input_email"
      />
      <input
        placeholder="Password"
        type="password"
        className="input_password"
      />
      <button className="SignIn">
        <h2>Sign In</h2>
      </button>
      <div className="checkbox">
        <div className="check_child">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <p>Need help?</p>
      </div>
    </div>
  );
}

export default SignInScreen;
