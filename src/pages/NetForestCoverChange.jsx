import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'

import ChooseGrafica from '../componentes/ChooseGrafica'
import BarChart from '../componentes/BarChart'



 

class NetForestCoverChange extends Component {

    state = {
        select: {
            GraficaType:'group',
            Iteration:'iteration_4',
            Scenario:'Sustainaible'
        }
    }
    
    
     


    //recive valor de class component "ComboBox" 
    handleChange = e => {
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciva un valor new
                ...this.state.select,
                [e.target.name]: e.target.value
            }
        })
    }
   


    render() {
        return (
            <div className="Nfch">
                 {/* componente de comboBox(opciones para el tipo de grafica)*/} 
                 <div className="Combo-Box">
                <ComboBox onChange={this.handleChange}/>
                </div>
                
             <div className="choose-grafica">
             <ChooseGrafica data={this.state}
                             grafica={BarChart}
             />
                </div>
                
               

           


           

            
            </div>
        )
    }
}
export default NetForestCoverChange;   

