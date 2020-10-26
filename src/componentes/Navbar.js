
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
import IIASA_LOGO from '../assets/IIASA_LOGO.png';
import SDSN_LOGO from '../assets/SDSN_LOGO.png';
import FoodAndLand_LOGO from '../assets/FoodAndLand_LOGO.png';


const Styles = styled.div`


#site-navbar{
  display:flex;
  justify-content:space-between;
  position: fixed;
  left:0;
  top:0;
  widht:100%;
  transition: 0.5s;


}


.banner-container{
  position:absolute;
}
 .banner{
  width:130px;
} 
 
.navbar{
  background-color: transparent ;
  right: 5%;
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
{/*export default class Navbar extends React.Component{
  componentDidMount(){
    
  }
  componentWillUnmount(){

  }
  handleScroll=()=>{}
  render(){
    return ()
  }
}*/ }

/*
<script>
$(function(){
 $("#navbar").on("scroll",function(){
   var lastScrollTop=0;
   navbar= document.getElementById("navbar");
   window.addEventListener("scroll", function(){
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     if(scrollTop> lastScrollTop){
       id.style.top="-80px"
     }else{
       id.style.top="0";
     }
     lastScrollTop=scrollTop;
   })
 })
})

</script>
*/
/*
var onScrollEvent = onScrollEvent=(id)=>{
  var lastScrollTop=0;
  navbar= document.getElementById("navbar");
  window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop> lastScrollTop){
      id.style.top="-80px"
    }else{
      id.style.top="0";
    }
    lastScrollTop=scrollTop;
  })
}
*/
const NavBar = () => {


  return (
    <Styles>

      <nav id="site-navbar">
        {/*
        <div class="banner-container">
                  <img src={IIASA_LOGO} class="banner" />
                  <img src={SDSN_LOGO} class="banner" />
                  <img src={FoodAndLand_LOGO} class="banner" />
                </div>

      */}
        <Router>
          <ReactBootStrap.Navbar expand="lg" className="nav" variant="light">
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Navbar.Brand href="#banners">
                <img
                  alt=""
                  src={IIASA_LOGO}
                  className="banner"
                />
                <img
                  alt=""
                  src={SDSN_LOGO}
                  className="banner"
                />
                <img
                  alt=""
                  src={FoodAndLand_LOGO}
                  className="banner"
                />
              </ReactBootStrap.Navbar.Brand>

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
                <ReactBootStrap.Navbar.Brand href="#schenaton2020">Schenathon 2020</ReactBootStrap.Navbar.Brand>
              </Link>
              <Link to="/Scenathon">
                <ReactBootStrap.Navbar.Brand href="#schenaton2019">Schenaton 2019</ReactBootStrap.Navbar.Brand>
              </Link>


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
      </nav>
      

    </Styles>

  )



}


export default NavBar;