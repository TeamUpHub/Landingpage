import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navigation from './components/Navigation/Navigation';

// Pages
import ProductPage from './pages/ProductPage';
import Homepage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import './styles/style.scss';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/landingpage' component={Homepage}></Route>
          <Route exact path='/product' component={ProductPage}></Route>
          <Route exact path='/about' component={AboutUsPage}></Route>
          <Route exact path='/contact' component={ContactPage}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
