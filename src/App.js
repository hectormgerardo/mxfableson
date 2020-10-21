import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./componentes/Navbar";
import About from './pages/About';
import { Jumbotron } from './componentes/Jumbotron'
import { Jumbotron_2}  from './componentes/Jumbotron_2'
import { Jumbotron_3 } from './componentes/Jumbotron_3'
import { Jumbotron_fin } from './componentes/Jumbotron_fin'
import Joyride from 'react-joyride';
import { Last } from 'react-bootstrap/esm/PageItem';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import Scenathon from './pages/Scenathon'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const ReactHint = ReactHintFactory(React)

export class App extends React.Component {
  state = {
    steps: [
      {
        target: '.About',
        content: 'En este apartado se hablará a líneas generales acerca de lo que es Fable'
      }
    ]
  };

  onRenderContent = (target, content) => {
		const {catId} = target.dataset
		const width = 240
		const url = `https://images.pexels.com/photos/${catId}/pexels-photo-${catId}.jpeg?w=${width}`

		return <div className="custom-hint__content">
			<img src={url} width={width} />
			<button ref={(ref) => ref && ref.focus()}
				onClick={() => this.instance.toggleHint()}>Ok</button>
		</div>
	}

  
  render(){

    return (
    <React.Fragment>
      <div>
        <div id="Nav">
          <Navbar/>
        </div>

        <Jumbotron/>
      
              <Scenathon />
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

        <div>
      </div>


			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				onRenderContent={this.onRenderContent}
				ref={(ref) => this.instance = ref}/>
		</div>
        <Joyride
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
          locale={{
            last: "End tour",
            skip: "Close tour"
          }}
        />
        
      </div>

        {/*<div id="Jumbotron_2" data-rh="Mensaje" data-rh-at="top">
          <Jumbotron_2 />
        </div>*/}
        
        {/*<div id="Jumbotron_3" data-rh="Mensaje" data-rh-at="top">
          <Jumbotron_3 data-rh="Mensaje" data-rh-at="top"/>
        </div>*/}
        
        {/*<div id="Jumbotron_fin" data-rh="Derechos de Autor" data-rh-at="top">
          <Jumbotron_fin/>
        </div>*/}
         
    </React.Fragment>
  )
}};
export default App;

