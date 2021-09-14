import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/portfolio" exact component={Portfolio}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
