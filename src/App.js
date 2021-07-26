import HomeScreen from "./pages/HomeScreen";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen.js";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen com={true} />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
export default App;
