import { useRef, useState } from "react";
import { auth } from "../firebase";
import "/home/yash/Documents/webDevClones/watchify/src/styles/signupscreen.css";

function SignInScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [user, setUser] = useState(auth.currentUser);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    setUser(auth.currentUser);
    console.log(auth.currentUser);
  };

  return (
    <div className="signupScreen">
      <h1>Sign In</h1>
      <input
        ref={emailref}
        placeholder="Email or phone number"
        type="email"
        className="input_email"
      />
      <input
        ref={passwordref}
        placeholder="Password"
        type="password"
        className="input_password"
      />
      <button className="SignIn" onClick={signIn}>
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
