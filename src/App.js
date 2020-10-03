import React from 'react';
import './css/App.css';
import Nfc from './pages/Grafica';
import Navbar from "./componentes/Navbar";
import Features from "./pages/GlobalTargets";
import About from './pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const NavBar = () => {
  return(
      <div className="App">
          <Router>
          <Navbar className="nav"/>

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
