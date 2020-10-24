
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
  position: absolute;
  right:10%;
  top: 0;
  
}
.navbar-brand, .navbar-nav .nav-link {
  color: white;
  margin-left: 40px;
  text-shadow: .5px .5px 2px #000000;
  &: hover{
    color:#306973;
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
            <Link to="/">
              <ReactBootStrap.Navbar.Brand href="#tour">Tour</ReactBootStrap.Navbar.Brand>
            </Link>
            <Link to="/">
              <ReactBootStrap.Navbar.Brand href="#fable">Fable</ReactBootStrap.Navbar.Brand>
            </Link>
            <Link to="/Scenathon">
              <ReactBootStrap.Navbar.Brand>Schenathon 2020</ReactBootStrap.Navbar.Brand>
            </Link>
            <Link to="/Scenathon">
              <ReactBootStrap.Navbar.Brand>Schenaton 2019</ReactBootStrap.Navbar.Brand>
            </Link>

            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
           { /*
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">


              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link>Login</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link>Sign In</ReactBootStrap.Nav.Link>                
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
           */}
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