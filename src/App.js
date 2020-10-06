import React from 'react';
import './css/App.css';
import Nfc from './pages/Scenathon';
import Navbar from "./componentes/Navbar";


const App = () => {
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
        <Route path="/Scenathon2020" component={Nfc}>
          <Nfc/>
        </Route>
        <Route path="/About" component={About}>
          <About />
        </Route>
      </Switch>
  </Router>
      </div>
  )
}
export default App;
