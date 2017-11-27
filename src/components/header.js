import React, { Component } from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {

  render() {
    return (

<Navbar inverse>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">Vega Labs</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/">Dwell Times</NavItem>
    <NavItem eventKey={2} href="/attendance">Attendance</NavItem>
    <NavItem eventKey={3} href="/flow">Flow</NavItem>
  </Nav>
</Navbar>

);
}
}

export default Header
