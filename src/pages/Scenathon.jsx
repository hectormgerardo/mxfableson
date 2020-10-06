import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'


import Dashboard from '../componentes/Dashboard'
import TabSelector from '../componentes/tabSelector'





 

class Scenathon extends Component {

    state = {
        select: {
            GraficaType:'group',
            Iteration:'iteration_4',
            Scenario:'Sustainaible'
        },
        dashboard:"gts"
    }
    
    //variable para almacenar el dashboard escogido
    
     
     
     

    //recive valor de class component "ComboBox" 
    handleChange = e => {
     
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciva un valor new
                ...this.state.select,
                [e.target.name]: e.target.value
                
            },
            [e.target.name]:e.target.value
           
        })
    }

   
  

   


    render() {
    
        return (
            
            <div className="container">
              
              
                 {/* componente de comboBox(opciones para el tipo de grafica)*/} 
                 <div className="Combo-Box">
                <ComboBox onChange={this.handleChange}/>
                </div>
                
                <div>
                    <Dashboard metodo={this.handleChange}   />     
                </div>

                

                <div className="tab-selector">
                <TabSelector    data={this.state}/>         
                </div>
            
          
               

           

            
            </div>
        )
    }
}
export default Scenathon;   

