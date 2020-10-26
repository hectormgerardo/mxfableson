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
import IIASA_LOGO_WHITE from '../assets/IIASA_LOGO_WHITE.png';
import IIASA_LOGO from '../assets/IIASA_LOGO.png';
import SDSN_LOGO_WHITE from '../assets/SDSN_LOGO_WHITE.png';
import SDSN_LOGO from '../assets/SDSN_LOGO.png';
import FoodAndLand_LOGO_WHITE from '../assets/FoodAndLand_LOGO_WHITE.png';
import FoodAndLand_LOGO from '../assets/FoodAndLand_LOGO.png';

const Styles = styled.div`
 
.navbar, #navbar{
  display:flex;
  position: fixed;
  transition: 1s;
  align-items:center;
  background-color: transparent ;
  padding:0 0%;
  justify-content:space-between;


.router-container {
 
  margin-left:100px;
  margin-right:90px;

.navbar-brand{
  margin-left:30px;
}
  
}

.banner-container{
 
  margin-right: 90px;


#IIASA_LOGO_WHITE{
  width:140px;
}
#SDSN_LOGO_WHITE{
margin-right:20px;
width: 100px;
}
#FoodAndLand_LOGO_WHITE{
  width: 130px;
}

}


.navbar-brand, .navbar-nav .nav-link {
  color: white;
  text-shadow: .5px .5px 2px #000000;
  &: hover{
    color:#306973;
    width:inherit;
    
  
  
  }

  .navbar-link{
    margin-left:70px;
  }
 

}
`;

const NavBar = () => {

  return (
    <Styles>


      {/*
        <div class="banner-container">
                  <img src={IIASA_LOGO} class="banner" />
                  <img src={SDSN_LOGO} class="banner" />
                  <img src={FoodAndLand_LOGO} class="banner" />
                </div>

      */}
      <Router>
        <ReactBootStrap.Navbar expand="lg" className="nav" id="navbar" variant="light">

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <div class="banner-container">

              <ReactBootStrap.Navbar.Brand href="#banners">
                <img
                  alt=""
                  className="banner"
                  id="IIASA_LOGO_WHITE"
                  src={IIASA_LOGO_WHITE}
                />
                <img
                  alt=""
                  src={SDSN_LOGO_WHITE}
                  className="banner"
                  id="SDSN_LOGO_WHITE"
                />
                <img
                  alt=""
                  src={FoodAndLand_LOGO_WHITE}
                  className="banner"
                  id="FoodAndLand_LOGO_WHITE"
                />

              </ReactBootStrap.Navbar.Brand>
            </div>


            <div className="router-container" id="router-container">

              <Link to="/">
                <ReactBootStrap.Navbar.Brand classname="navbar-link" href="#home">Home</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link to="/">
                <ReactBootStrap.Navbar.Brand classname="navbar-link" href="#tour">Tour</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link to="/">
                <ReactBootStrap.Navbar.Brand classname="navbar-link" href="#fable">Fable</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link to="/Scenathon">
                <ReactBootStrap.Navbar.Brand classname="navbar-link" href="#schenaton2020">Schenathon 2020</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link to="/Scenathon">
                <ReactBootStrap.Navbar.Brand classname="navbar-link" href="#schenaton2019">Schenaton 2019</ReactBootStrap.Navbar.Brand>
              </Link>

            </div>

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

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-120px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("IIASA_LOGO_WHITE").src = IIASA_LOGO;
    document.getElementById("SDSN_LOGO_WHITE").src = SDSN_LOGO;
    document.getElementById("FoodAndLand_LOGO_WHITE").src = FoodAndLand_LOGO;


  }
  if (currentScrollPos === 0) {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("IIASA_LOGO_WHITE").src = IIASA_LOGO_WHITE;
    document.getElementById("SDSN_LOGO_WHITE").src = SDSN_LOGO_WHITE;
    document.getElementById("FoodAndLand_LOGO_WHITE").src = FoodAndLand_LOGO_WHITE;


  }
  prevScrollpos = currentScrollPos;
}

export default NavBar; 