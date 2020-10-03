import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'

import ChooseGrafica from '../componentes/ChartSelector'
import BarChart from '../componentes/BarChart'
import Dashboard from '../componentes/Dashboard'




 

class NetForestCoverChange extends Component {

    state = {
        select: {
            GraficaType:'group',
            Iteration:'iteration_4',
            Scenario:'Sustainaible'
        },
        
    }
    
    //variable para almacenar el dashboard escogido
     state_dos={
         dashboard:"gts"
     }
    
     


    //recive valor de class component "ComboBox" 
    handleChange = e => {
     console.log(this.state)
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciva un valor new
                ...this.state.select,
                [e.target.name]: e.target.value
            },
           
           
        })
    }

    //
    obtenerDashboard=e=>{
      
        this.state_dos.dashboard=e.target.value;
        console.log(this.state_dos.dashboard)
       


    }
   


    render() {
        return (
            <div className="Nfch">
                <div>
                    <Dashboard onChange={this.obtenerDashboard}/>
                </div>
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

