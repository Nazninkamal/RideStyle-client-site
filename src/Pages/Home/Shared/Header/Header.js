import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import logo from '../../../images/logo/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
       
<>
  <Navbar className="navbar navbar-light" style={{backgroundColor:"white"}}sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">
      {/* <img src={logo} alt="" /> */}
    RIDESTYLE
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-start">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
    <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
      {/* <Nav.Link as={HashLink} to="/home#purchase">Purchase</Nav.Link> */}
      <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>
      <Nav.Link as={HashLink} to="/addservice">AddService</Nav.Link>
     <Navbar.Collapse className="justify-content-end">
      { user?.email ?
           <Nav.Link as={HashLink} to="/myorder">My Order</Nav.Link>:<></>}
          { user?.email ?
           <Nav.Link as={HashLink} to="/notfound">Manage all Order</Nav.Link>:<></>}
     {user?.email ?
     <Button onClick={logOut} variant="light">Logout</Button>:
      <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

    //  <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
    }

      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      
      </Navbar.Text>
       </Navbar.Collapse>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  

  
</>

      
    );
};

export default Header;