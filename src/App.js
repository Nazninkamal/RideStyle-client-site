import {  } from 'react-router';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Footer/Footer';
import AllProduct from './Pages/Home/AllProduct/AllProduct';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Purchases from './Pages/Home/Purchases/Purchases';
import Register from './Pages/Home/Register/Register';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return ( 
    <div className="App">
    <AuthProvider>
    <Router>
     <Header></Header>
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
          <Route path="/allproduct">
         <AllProduct></AllProduct>
       </Route>
           <Route path="/login">
        <Login></Login>
       </Route> 
        <Route path="/register">
         <Register></Register>
       </Route>
       
        <Route path="/addservice">
      <AddService></AddService>
    </Route>
         <PrivateRoute path="/purchase">
           <Purchase></Purchase>
           </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    <Footer></Footer>
    </div>
  );
}

export default App;
