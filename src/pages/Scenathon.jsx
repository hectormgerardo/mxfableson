import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'
import ComboBox2 from '../componentes/ComboBox2'
import ComboBox3 from '../componentes/ComboBox3'

import Dashboard from '../componentes/Dashboard'


//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'

import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'
import FoodEnergyIntakePerCapita2 from '../pages/FoodEnergyIntakePerCapita2'
import FreshWaterUse from '../pages/FreshWaterUse'
import NetForestCoverChange2 from '../pages/NetForestCoverChange2'
import GreenHouse2 from '../pages/GreenHouse2'

import GreenHouseOne from '../pages/GreenHouseOne'
import FreshWaterTwo from '../pages/FreshWaterTwo'




 

class Scenathon extends Component {
    constructor(props) {
        super(props);
        this.dash= <GlobalTargets combinacion={this.state}></GlobalTargets>;
        this.combobox=<ComboBox onChange={this.handleChange}/>;
    }
    state = {
        select: {
            GraficaType:'group',
            Iteration:'iteration_4',
            Scenario:'Sustainaible',
            Year:'2000'
        },
        dashboard:"Global Target Summary"
    }
    
  
    
     

    //recibe valor de class component "ComboBox" 
    handleChange = e => {
     
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                ...this.state.select,
                [e.target.name]: e.target.value
                
            },
            dashboard:e.target.value
           
        })
        

        
    }

    selectDashboard(){
      
        switch(this.state.dashboard){
            case 'Global Target Summary': 
               // this.combobox=<ComboBox onChange={this.handleChange}/>
                
              break;
            case 'Net Forest Cover Change(1)': 
            this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<NetForestCoverChange combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change(2)':
                this.combobox=<ComboBox3 onChange={this.handleChange}/>
                
                this.dash=<NetForestCoverChange2 combinacion={this.state}/>;
                break;
            case 'Biodiversity':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<Biodiversity combinacion={this.state}/>;
            break;
            case 'Protected areas by type':
             //  <ComboBox onChange={this.handleChange}/>
             this.combobox=null;
                this.dash=<ProtectedAreaByType/>;
            break;
            case 'Land Cover':
               // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox=null;
                this.dash=<LandCover combinacion={this.state}/>;
            break;
            case 'Fresh water use (1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterUse combinacion={this.state}/>;
            break;
            case 'Fresh water use (2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterTwo combinacion={this.state}/>;
            break;
            case 'GreenHouse Gas(GHG) Emissions(1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouseOne combinacion={this.state}/>;
            break;
            case 'GreenHouse Gas(GHG) Emissions(2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouse2 combinacion={this.state}/>;
            break;
            case 'Food energy intake per capita (1)':
             //   this.combobox=<ComboBox2 onChange={this.handleChange}/>
             this.combobox=null;  
              
             this.dash=<FoodEnergyIntakePerCapita/>;
            break;
            case 'Food energy intake per capita (2)':
                this.combobox=null;   
             this.dash=<FoodEnergyIntakePerCapita2/>;
            break;
           
          }
    }

   
  

   


    render() {
        return (
            <div className="container-fluid">
                {/* componente de comboBox(opciones para el tipo de grafica)*/}
                <div className="Combo-Box">
                </div>
                <div>
                    <Dashboard metodo={this.handleChange} data={this.state} />
                </div>
                {this.selectDashboard()}
                {this.combobox}
                {this.dash}
            </div>
        )
    }
}
export default Scenathon;   

