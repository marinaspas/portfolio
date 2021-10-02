import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
