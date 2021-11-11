import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import img from '../../images/dash.png'
import './Dashboard.css'

const Dashboard = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div>
           <Navbar bg="light" expand={false}>
           <h3 className="text-danger">Click here</h3>
        <Container fluid>
       
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
              
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/myorders">My Order</Nav.Link>
              <Nav.Link as={HashLink} to="/pay">Pay</Nav.Link>
              <Nav.Link as={HashLink} to="/review">Review</Nav.Link>
              {user?.email ?
              <Nav.Link as={HashLink} onClick={logOut}  to="/logout">Logout</Nav.Link>
            :<></>}
                
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
            </div>
            <div className="right-side-image">
                        <img
                        
                            src={img}
                            alt=""
                        />
                    </div>
        </div>
    );
};

export default Dashboard;