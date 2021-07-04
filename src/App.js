import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
