import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2} from './componentes/Jumbotron_2'
import { Jumbotron_3} from './componentes/Jumbotron_3'
import { Jumbotron_fin} from './componentes/Jumbotron_fin'
import Joyride from 'react-joyride';
import { Last } from 'react-bootstrap/esm/PageItem';


export class App extends React.Component {
  state = {
    steps: [
      {
        target: '.About',
        content: 'En este apartado se hablará a líneas generales acerca de lo que es Fable',
      },
      {
        target: '.Nav',
        content: 'Seccion uno de menu',
      }
    ]
  };
  
  render(){
    const { steps } = this.state;
    return (
    <React.Fragment>
      <Jumbotron/> 
      <Navbar id="Nav" />
        <div id="About">
             <About/>
        </div>
        <div className="app">
        <Joyride
          steps={steps}
          continuous={true}
          showSkipButton={true}
          
          styles={{
            tooltipContainer: {
              textAlign: "left"
            },
            buttonNext: {
              backgroundColor: "green"
            },
            buttonBack: {
              marginRight: 10
            }
          }}
        />
      </div>

        <Jumbotron_2/>
        <Jumbotron_3/>
        <Jumbotron_fin/>
         
    </React.Fragment>
  )
}};
export default App;

