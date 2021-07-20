import HomeScreen from "./pages/HomeScreen";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const user = null;
  return (
    <div className="app">
      <HomeScreen />
      <Router>
        <Route path="/login">
          {user ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )}
        </Route>
      </Router>
    </div>
  );
}
export default App;
