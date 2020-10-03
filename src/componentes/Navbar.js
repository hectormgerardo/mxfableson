import React from 'react';
import "../css/App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';



const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="nav" variant="light">
    <Link to="/pages/NetForestCoverChange">
      
  <ReactBootStrap.Navbar.Brand href="#home">Scenathon 2020</ReactBootStrap.Navbar.Brand>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
   
   
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/About">
    <ReactBootStrap.Nav.Link href="#About">About</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;