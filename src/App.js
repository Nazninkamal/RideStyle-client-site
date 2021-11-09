import {  } from 'react-router';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return ( 
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path ="/contact">
          <Contact></Contact>

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
