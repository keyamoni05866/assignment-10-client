import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <Container className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand className="fs-4 mt-0 " >Chef-Hunter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
                <Link to="/" className="pe-5 text-decoration-none text-dark text-xl fs-4 ">Home</Link>
                <Link to="/blog"  className="pe-5 text-decoration-none text-dark text-xl fs-4 ">Blog</Link>
             
            </Nav>
            <Nav>
            {/* {user && 
              <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle>
          }
             
             {user ? <Button onClick={handleLogOut} variant="secondary py-2 px-3">Log Out</Button>:
              <Link to="/login"><Button variant="secondary py-2 px-3">Login</Button></Link>
              } */}
               <Link to="/login"><Button className="button-login py-2 px-4 ">Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
