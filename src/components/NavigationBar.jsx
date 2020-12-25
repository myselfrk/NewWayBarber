import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewWayBarber
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    // <div>
    //   <Navbar color="dark" dark expand="md">
    //     <Link to="/">
    //       <NavbarBrand>NewWayBarber</NavbarBrand>
    //     </Link>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav>
    //         <NavItem>
    //           <Link to="/login">
    //             <NavLink>Login</NavLink>
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link to="/signup">
    //             <NavLink>Signup</NavLink>
    //           </Link>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
};

export default NavigationBar;
