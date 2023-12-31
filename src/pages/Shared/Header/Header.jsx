import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink} from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../providers/AuthProvider";



const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="header ">
        <Container className="">
          <Navbar.Brand className="fs-3 ps-4 fw-semibold fst-italic ">
            Master-Chef
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
             
            
          <NavLink  to="/">
            
         <li className="pe-5  text-xl fs-4">Home</li>
        
            
            </NavLink>
          <NavLink  to="/blog"> <li className="pe-5 text-xl fs-4">Blog</li></NavLink>
            </Nav>

            <div className="h-25 w-25">
              {user && (
                <img
                  src={user.photoURL}
                  data-toggle="tooltip"
                  title={user?.displayName}
                  className="w-25 h-25 rounded-circle image-profile"
                />
              )}
            </div>

            <div className="">
              {user ? (
                <Button
                  onClick={handleLogOut}
                  className="button-login py-2 px-4 mt-2"
                >
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="button-login py-2 px-4">Login</Button>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
