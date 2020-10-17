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
        content: 'Seccion uno de menu',
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
    return (
    <React.Fragment>
      <Jumbotron/> 

      <div>
			<ReactHint autoPosition events delay={{show: 100, hide: 1000}} />
			<ReactHint persist
				attribute="data-custom"
				className="custom-hint"
				events={{click: true}}
				onRenderContent={this.onRenderContent}
				ref={(ref) => this.instance = ref}/>
		</div>

      <Navbar id="Nav" />
        <div data-rh="Mensaje" data-rh-at="top" id="About">
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

