import "./App.css";
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
