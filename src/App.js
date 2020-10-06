import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import {Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2} from './componentes/Jumbotron_2'


class App extends Component {
  render(){
    return (
    <React.Fragment>
           <Jumbotron/> <Navbar/>
          <About/>
          <Jumbotron_2/>
         
    </React.Fragment>
  )
}};
export default App;

