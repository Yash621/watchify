import HomeScreen from "./pages/HomeScreen";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const user = auth.currentUser;

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    //   if (userAuth) {
    //   } else {
    //   }
    // });

    // return unsubscribe;
    console.log(user);
  }, []);

  return (
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
  );
}
export default App;
