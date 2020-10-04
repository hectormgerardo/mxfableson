import React from 'react';
import "../css/App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Nfc from '../pages/Grafica';

import Features from "../pages/GlobalTargets";
import About from '../pages/About';


const NavBar = () => {
    return(
        <div className="NavBar">

<Router>


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

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Features" component={Features}>
          <Features />
        </Route>
        <Route path="/pages/NetForestCoverChange" component={Nfc}>
          <Nfc />
        </Route>
        <Route path="/About" component={About}>
          <About />
        </Route>
      </Switch>
 



</Router>
        </div>
    )
}

export default NavBar;