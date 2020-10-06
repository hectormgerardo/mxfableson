import React from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';


const App = () => {
  return(

      <div className="App">
          <Navbar/>
        <div id="About">
          <About/>
          </div>
      </div>
      
  )
}
export default App;