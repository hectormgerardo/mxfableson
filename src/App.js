import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2}  from './componentes/Jumbotron_2'
import { Jumbotron_3 } from './componentes/Jumbotron_3'
import { Jumbotron_fin } from './componentes/Jumbotron_fin'
import { Last } from 'react-bootstrap/esm/PageItem';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import Scenathon from './pages/Scenathon'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ReactJoyride from 'react-joyride';

const ReactHint = ReactHintFactory(React)

export class App extends React.Component {
  state={
    run: true,
    steps: [
      {
        target: ".About",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "tomato"
            }
          },
          locale: { 
            next: <span>GO GO GO</span>,
            back: <span>BACK BACK</span>
          },
          placement: "top"
      },
      {
        target: ".Fin",
        content: "Se habla acerca de Fable",
        title: "You can have a title here!",
          styles: {
            //this styles override the styles in the props
            options: {
              textColor: "tomato"
            }
          },
          locale: { 
            next: <span>GO GO GO</span>,
            back: <span>BACK BACK</span>
          },
          placement: "top"

      }
      
    ]
  };

  handleClick = e => {
    e.preventDefault();
    
    this.setState({
     run: true
    });
  };
  

  render(){
    return (
        <React.Fragment>
          <ReactJoyride
          steps={this.state.steps}
          run={this.state.run}
          continuous
          showProgress
          showSkipButton
          styles={{
           options: {
              // modal arrow and background color
              arrowColor: "#eee",
              backgroundColor: "#eee",
              // page overlay color
              overlayColor: "rgba(79, 26, 0, 0.4)",
              //button color
              primaryColor: "mediumaquamarine",
              //text color
              textColor: "#333",
          
              //width of modal
              width: 500,
              //zindex of modal
              zIndex: 1000
          }
      }}
        />
        <div id="Nav">
          <Navbar/>
        </div>

          <div id="About">
            <Jumbotron />
          </div>
      
              <Scenathon id="a"/>
          <Router>
          <Link to="/Scenathon">
          </Link>  
          <Switch>
            <Route exact path="/Scenathon" component={Scenathon}>
            </Route>
          </Switch>
         </Router>
        <div data-rh="Este es el apartado About" data-rh-at="top" id="About">
          <About/>
        </div>
        <div className="app">

			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				onRenderContent={this.onRenderContent}
				ref={(ref) => this.instance = ref}/>
		</div>

        <div>
      </div>
        

        <div id="Jumbotron_2" data-rh="Mensaje" data-rh-at="top">
          <Jumbotron_2 />
        </div>
        
        <div id="Jumbotron_3" data-rh="Mensaje" data-rh-at="top" id="Scenathon">
          <Jumbotron_3 data-rh="Mensaje" data-rh-at="top"/>
        </div>
        
        <div id="Jumbotron_fin" data-rh="Derechos de Autor" data-rh-at="top">
          <Jumbotron_fin/>
        </div>
         
    </React.Fragment>
  )
}};
export default App;

