import React from 'react';
import "../css/App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Nfc from '../pages/Scenathon';
import Features from "../pages/GlobalTargets";
import About from '../pages/About';
import styled from 'styled-components';


const Styles = styled.div`
.navbar{
  background-color: #528D93 ;
}
.navbar-brand, .navbar-nav .nav-link {
  color:white;
  &: hover{
    color:#94B046;
  }
}
`;
const NavBar = () => {
    return(

      <Styles>
        <div className="NavBar">

          <Router>


            <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="nav" variant="light">
                <Link to="/">

              <ReactBootStrap.Navbar.Brand href="#home">Fable</ReactBootStrap.Navbar.Brand>
              </Link>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 


                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#About">About </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

                  {/* A <Switch> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/Features" component={Features}>
                      <Features />
                    </Route>
                    <Route path="/" component={Nfc}>
                      <Nfc />
                    </Route>
                    <Route path="/About"  render={
                      ()=>{
                        return( <h1>About</h1> );
                      }
                    }>
                      <About/>
                    </Route>
                  </Switch>
          
          </Router>
        </div>
      </Styles>
    )
}

export default NavBar;