import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'

import ComboBox3 from '../componentes/ComboBox3'
import Aside from '../componentes/Aside';
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
import TradeReport from '../pages/TradeReport'
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
      

       if(e.target==undefined)
       {
          
        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                GraficaType:this.state.select.GraficaType,
                Iteration:this.state.select.Iteration,
                Scenario:this.state.select.Scenario,
                Year:this.state.select.Year
            },
            dashboard:e
           
        }) 
       }else{
          this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                ...this.state.select,
                
                [e.target.name]: e.target.value
            },
            dashboard:e.target.value
           
        }) 
       }

        
        

    }

    selectDashboard(){
      console.log("entre")
        switch(this.state.dashboard){
            case 'Global Target Summary': 
                this.combobox=<ComboBox onChange={this.handleChange}/>
               this.dash=<GlobalTargets combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change 1': 
            this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<NetForestCoverChange combinacion={this.state}/>;
              break;
            case 'Net Forest Cover Change 2':
                this.combobox=<ComboBox3 onChange={this.handleChange}/>
                
                this.dash=<NetForestCoverChange2 combinacion={this.state}/>;
                break;
            case 'Biodiversity':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<Biodiversity combinacion={this.state}/>;
            break;
            case 'Protected Areas by Type':
             //  <ComboBox onChange={this.handleChange}/>
             this.combobox=null;
                this.dash=<ProtectedAreaByType/>;
            break;
            case 'Land Cover':
               // this.combobox=<ComboBox onChange={this.handleChange}/>
                this.combobox=null;
                this.dash=<LandCover combinacion={this.state}/>;
            break;
            case 'Fresh Water 1':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterUse combinacion={this.state}/>;
            break;
            case 'Fresh Water 2':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterTwo combinacion={this.state}/>;
            break;
            case 'Green House Gas (GHG) Emissions 1':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouseOne combinacion={this.state}/>;
            break;
            case 'Green House Gas (GHG) Emissions 2':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouse2 combinacion={this.state}/>;
            break;
            case 'Food Energy Intake Per Capita 1':
             //   this.combobox=<ComboBox2 onChange={this.handleChange}/>
             this.combobox=null;  
              
             this.dash=<FoodEnergyIntakePerCapita/>;
            break;
            case 'Food Energy Intake Per Capita 2':
                this.combobox=null;   
             this.dash=<FoodEnergyIntakePerCapita2/>;
            break;
            case 'Importers':
                this.combobox=null;   
             this.dash=<TradeReport/>;
            break;
           
          }
    }

   
  

   


    render() {
        return (
            <div className="container-fluid" style={{display: 'flex'}}>
               <div>
                 <Aside onChange={this.handleChange}/>  
               </div>
            
          
                <div>
                 {/*    <Dashboard metodo={this.handleChange} data={this.state} />*/}
                </div>
                <div>
                {this.selectDashboard()}
                {this.combobox}
                {this.dash}
                </div>
             
            </div>
        )
    }
}
export default Scenathon;   

