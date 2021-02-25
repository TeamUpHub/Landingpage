import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/style.scss"
//Components
import Landing from "./components/Landing/Landing";
import Navigation from "./components/Navigation/Navigation";

// Pages
import ProductPage from './pages/ProductPage';
import Homepage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/landingpage" component={Homepage}></Route>
            <Route exact path="/product" component={ProductPage}></Route>
            <Route exact path="/about" component={AboutUsPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
