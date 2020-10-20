import React from 'react';
import "../css/App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Scenathon from '../pages/Scenathon';
import Features from "../pages/GlobalTargets";
import About from '../pages/About';
import styled from 'styled-components';
import TradeReport from '../pages/TradeReport';

const Styles = styled.div`
.navbar{
  background-color: transparent ;
}
.navbar-brand, .navbar-nav .nav-link {
  color: #006A75;
  &: hover{
    color:#D4C410;
  }
}
`;
const NavBar = () => {
  return (

    <Styles>
      

        <Router>


          <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="nav" variant="light">
            <Link to="/">
              <ReactBootStrap.Navbar.Brand href="#home">Home</ReactBootStrap.Navbar.Brand>
            </Link>
            <Link to="/Scenathon">
              <ReactBootStrap.Navbar.Brand>Scenathon</ReactBootStrap.Navbar.Brand>
            </Link>
            <Link to="/Contact">
              <ReactBootStrap.Navbar.Brand>Contact</ReactBootStrap.Navbar.Brand>
            </Link>

            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">


              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link>Login</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link>Sign In</ReactBootStrap.Nav.Link>                
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>

          {/* A <Switch> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
          <Switch>
            {/*<Route path="/Features" component={Features}>
              <Features />
            </Route>*/}

            {/*<Route path="/TradeReport" component={TradeReport}>
              <TradeReport />
                    </Route>*/}
            {/*<Route exact path="/Scenathon" component={Scenathon}>
                <Scenathon />
              </Route>*/}

            
            <Route path="/About" render={
              () => {
                return (<h1>About</h1>);
              }
            }>
              <About />
            </Route>
          </Switch>

        </Router>
      
    </Styles>
  )
}

export default NavBar;