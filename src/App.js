import {  } from 'react-router';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Footer/Footer';
import AllProducts from './Pages/Home/AllProducts/AllProducts';

import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Register from './Pages/Home/Register/Register';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import Pay from './Pages/Pay/Pay';
import Review from './Pages/Review/Review';


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
          <Route path="/allproducts">
         <AllProducts></AllProducts>
       </Route>
           <Route path="/login">
        <Login></Login>
       </Route> 
        <Route path="/register">
         <Register></Register>
       </Route>
       <Route path="/dashboard">
         <Dashboard></Dashboard>
       </Route>
       <Route path="/pay">
         <Pay></Pay>
       </Route>
       <Route path="/review">
        <Review></Review>
       </Route>
       
        <Route path="/addservice">
      <AddService></AddService>
    </Route>
    <Route path="/myorders">
      <MyOrder></MyOrder>
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
