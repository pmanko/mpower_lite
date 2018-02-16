import React from 'react';
import PropTypes from 'prop-types'
/* TODO: put in proptypes */

// import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink as BootNavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import "./NavBar.css"
import Login from '../../containers/Login';

const NavBar = ({collapsed, onToggle}) => <div>
  <section class="header-w3ls">
    <button id="trigger-overlay" type="button">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <div class="bottons-agileits-w3layouts">      
      <NavLink className='nav-link' to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</NavLink>
      <NavLink className='nav-link' to="/register"><i class="fa fa-sign-in" aria-hidden="true"></i>register</NavLink>
    </div>
    <h1>
      <a href="/">TB Mobile App</a>
    </h1>
    <div class="clearfix"> </div>
  </section>
</div>

export default NavBar;
