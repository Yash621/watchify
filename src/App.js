import HomeScreen from "./pages/HomeScreen";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { logout, login, selectUser, userSlice } from "./features/userSlice";
import { createStore } from "redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const store = createStore(userSlice);

  useEffect(() => {
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

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </Provider>
  );
}
export default App;
