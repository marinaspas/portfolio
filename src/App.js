import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
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
