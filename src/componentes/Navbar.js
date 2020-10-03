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
<<<<<<< HEAD
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="nav-color" variant="light">
    <Link to="/pages/NetForestCoverChange">
      
=======
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="nav" sticky="top" variant="light" >
>>>>>>> 03e85c8f41fe5c69fb90f3fafada1f4512d1cae5
  <ReactBootStrap.Navbar.Brand href="#home">Scenathon 2020</ReactBootStrap.Navbar.Brand>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
<<<<<<< HEAD
    <ReactBootStrap.Nav className="mr-auto"> 
   
   
=======
    <ReactBootStrap.Nav className="mr-auto" sticky="top"> 
    
      <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
      <Link to="/Features">
    <ReactBootStrap.Nav.Link href="#features">Global Targets summary</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/pages/NetForestCoverChange">
    <ReactBootStrap.Nav.Link href="#netforestcoverchange">Net forest cover change (1)</ReactBootStrap.Nav.Link>
    </Link>
      <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Net forest cover change (2)</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Biodiversity</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Protected areas by type</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Land cover</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Fresh water use (1)</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Fresh water use (2)</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Greenhouse Gas (GHG) Emissions (1)</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Food energy intake per capita (1)</ReactBootStrap.Nav.Link>
        </Link>
        <Link to="/pages/NetForestCoverChange">
        <ReactBootStrap.Nav.Link href="#netforestcoverchange">Food energy intake per capita (2)</ReactBootStrap.Nav.Link>
        </Link>
        
      </ReactBootStrap.NavDropdown>
>>>>>>> 03e85c8f41fe5c69fb90f3fafada1f4512d1cae5
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