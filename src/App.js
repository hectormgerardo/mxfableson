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
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";


const ReactHint = ReactHintFactory(React)

export class App extends React.Component {
  state = {
    steps: [
      {
        target: '.About',
        content: 'En este apartado se hablará a líneas generales acerca de lo que es Fable',
      },
      {
        target: '.Nav',
        content: 'a',
      },

      {
        target: '.Jumbotron_3',
        content: 'b',
      },
      {
        target: '.Jumbotron_fin',
        content: 'c',
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
    const { steps } = this.state;
    
    const INITIAL_STATE = {
      key: new Date(), // This field makes the tour to re-render when we restart the tour
      run: false,
      continuous: true, // Show next button
      loading: false,
      stepIndex: 0, // Make the component controlled
      steps: steps
    };

    const reducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        // start the tour
        case "START":
          return { ...state, run: true };
        // Reset to 0th step
        case "RESET":
          return { ...state, stepIndex: 0 };
        // Stop the tour
        case "STOP":
          return { ...state, run: false };
        // Update the steps for next / back button click
        case "NEXT_OR_PREV":
          return { ...state, ...action.payload };
        // Restart the tour - reset go to 1st step, restart create new tour
        case "RESTART":
          return {
            ...state,
            stepIndex: 0,
            run: true,
            loading: false,
            key: new Date()
          };
        default:
          return state;
      } 
    };

    //const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    /*useEffect(() => {
      dispatch({ type: "START" });
    }, []);*/

    const callback = data => {
      const { action, index, type, status } = data;

      if (
        // If close button clicked then close the tour
        action === ACTIONS.CLOSE ||
        // If skipped or end tour, then close the tour
        (status === STATUS.SKIPPED && this.state.run) ||
        status === STATUS.FINISHED
      ) {
        //dispatch({ type: "STOP" });
      } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
        // Check whether next or back button click and update the step
        /*dispatch({
          type: "NEXT_OR_PREV",
          payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) }
        });*/
      }
    };

    const startTour = () => {
      // TODO: Start the tour manually
      //dispatch({ type: "RESTART" });
    };

    return (
    <React.Fragment>
      <div id="Nav">
        <Navbar />
      </div>

        <div data-rh="Mensaje" data-rh-at="top" id="About">
             <About/>
        </div>
        <div className="app">

      <div>
      
      <Jumbotron/>


			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				onRenderContent={this.onRenderContent}
				ref={(ref) => this.instance = ref}/>
		</div>
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
          locale={{
            last: "End tour",
            skip: "Close tour"
          }}
        />
        
      </div>

        <div id="Jumbotron_2" data-rh="Mensaje" data-rh-at="top">
          <Jumbotron_2 />
        </div>
        
        <div id="Jumbotron_3" data-rh="Mensaje" data-rh-at="top">
          <Jumbotron_3 data-rh="Mensaje" data-rh-at="top"/>
        </div>
        
        <div id="Jumbotron_fin" data-rh="Derechos de Autor" data-rh-at="top">
          <Jumbotron_fin/>
        </div>
         
    </React.Fragment>
  )
}};
export default App;

