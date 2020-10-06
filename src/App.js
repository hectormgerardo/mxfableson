import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import Jumbotron from './componentes/Jumbotron'


class App extends Component {
  render(){
    return (
    <React.Fragment>
           <Jumbotron/> <Navbar/>
          <About/>
         
    </React.Fragment>
  )
}};
export default App;

