import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
// import '../css/Store.css';
const Header = (props) => {
  return (
    <Navbar id="nav" className="bg-light justify-content-between" expand="lg">
      <NavLink className="navbar-brand" to="/">
        <img
          style={{ width: '100px' }}
          src="https://use.expensify.com/assets/logo/expensify-app-logo.png"
          alt="sobeys"
        />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="row   w-100  justify-content-end">
            <NavLink
              className="nav-link"
              to="/"
              activeClassName="is-active"
              exact={true}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="nav-link"
              to="/create"
              activeClassName="is-active"
            >
              Create Expense
            </NavLink>
            <NavLink
              className="nav-link"
              to="/edit"
              activeClassName="is-active"
            >
              Edit Expense
            </NavLink>
            <NavLink
              className="nav-link"
              to="/help"
              activeClassName="is-active"
            >
              Help
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};
export default Header;
