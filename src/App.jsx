import './App.css';
import Horoscope from './components/Horoscope/Horoscope.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/horoscope" component={Horoscope} />
      </Switch>
    </Router>
  );
}

export default App;