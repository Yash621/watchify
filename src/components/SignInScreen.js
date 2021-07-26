import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/signupscreen.css";

function SignInScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [signUp, setSignUp] = useState(false);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        setSignUp(false);
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
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
            dispatch(
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            );
          } else {
            dispatch(logout);
          }
        });
      })
      .catch((error) => {
        alert(error.message);
      });
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
      {!signUp ? (
        <button className="SignIn" onClick={signIn}>
          <h2>Sign In</h2>
        </button>
      ) : (
        <button className="SignIn" onClick={register}>
          <h2>Sign up</h2>
        </button>
      )}
      <div className="checkbox">
        <div className="check_child">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <div className="sign-up">
          <p onClick={() => setSignUp(true)}>Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
