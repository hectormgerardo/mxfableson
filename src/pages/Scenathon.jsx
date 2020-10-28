import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'
import ComboBox2 from '../componentes/ComboBox2'
import ComboBox3 from '../componentes/ComboBox3'

import Dashboard from '../componentes/Dashboard'
import TabSelector from '../componentes/TabSelector'

//dashboards
import NetForestCoverChange from '../pages/NetForestCoverChange'
import Biodiversity from '../pages/Biodiversity'
import GlobalTargets from '../pages/GlobalTargets'

import ProtectedAreaByType from '../pages/ProtectedAreaByType'
import LandCover from '../pages/LandCover'
import FoodEnergyIntakePerCapita from '../pages/FoodEnergyIntakePerCapita'
import FreshWaterUse from '../pages/FreshWaterUse'
import NetForestCoverChange2 from '../pages/NetForestCoverChange2'
import GreenHouse2 from '../pages/GreenHouse2'

import GreenHouseOne from '../pages/GreenHouseOne'
import FreshWaterTwo from '../pages/FreshWaterTwo'

import styled from 'styled-components';

import BannerLifeOnLand from '../assets/banners/Mesa de trabajo 19.png';
import BannerCleanWater from '../assets/banners/Mesa de trabajo 8.png';
import BannerZeroHunger from '../assets/banners/Mesa de trabajo 2.png';
import BannerClimateAction from '../assets/banners/Mesa de trabajo 16.png';
import Aside from '../componentes/Aside';

const Styles = styled.div`
header{


overflow:hidden;
  background-color: white;
  color: white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 50px;
  margin: 0;
  height: 100px;
  margin-top:20px;
  


.banner{
  max-width:100%;
max-height:100%;
}


}

.container{
    display:flex;
    width:1500px;
}



`;
 

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
            [e.target.name]:e.target.value
           
        })
        

        
    }

    selectDashboard(){
        
        switch(this.state.dashboard){
            case 'Global Target Summary': 
                this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<GlobalTargets combinacion={this.state}/>;
              
              break;
            case 'Net Forest Cover Change(1)': 
            this.combobox=<ComboBox onChange={this.handleChange}/>
              this.dash=<NetForestCoverChange combinacion={this.state}/>;
              document.getElementById("banner").src=BannerLifeOnLand;
              break;
            case 'Net Forest Cover Change(2)':
                this.combobox=<ComboBox3 onChange={this.handleChange}/>
                this.dash=<NetForestCoverChange2 combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
                break;
            case 'Biodiversity':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<Biodiversity combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Protected areas by type':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<ProtectedAreaByType combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Land Cover':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<LandCover combinacion={this.state}/>;
                document.getElementById("banner").src=BannerLifeOnLand;
            break;
            case 'Fresh water use (1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterUse combinacion={this.state}/>;
                document.getElementById("banner").src=BannerCleanWater;
            break;
            case 'Fresh water use (2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<FreshWaterTwo combinacion={this.state}/>;
                document.getElementById("banner").src=BannerCleanWater;
            break;
            case 'GreenHouse Gas(GHG) Emissions(1)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouseOne combinacion={this.state}/>;
                document.getElementById("banner").src=BannerClimateAction;
            break;
            case 'GreenHouse Gas(GHG) Emissions(2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<GreenHouse2 combinacion={this.state}/>;
                document.getElementById("banner").src=BannerClimateAction;
            break;
            case 'Food energy intake per capita (1)':
                this.combobox=<ComboBox2 onChange={this.handleChange}/>
                this.dash=<FoodEnergyIntakePerCapita combinacion={this.state}/>;
                document.getElementById("banner").src=BannerZeroHunger;
            break;
            case 'Food energy intake per capita (2)':
                this.combobox=<ComboBox onChange={this.handleChange}/>
                this.dash=<h1>Food energy intake per capita (2)</h1>;
                document.getElementById("banner").src=BannerZeroHunger;
            break;
           
          }
    }

   
  

   


    render() {
    
        return (
            <Styles>
                <header>
            <img class="banner" id="banner"></img>
            </header>


                 <div className="container">
                 <Aside />
                       
                 {/* componente de comboBox(opciones para el tipo de grafica)*/} 
                 <div className="Combo-Box">
                
                </div>
                
                <div>
                    <Dashboard metodo={this.handleChange}  data={this.state} />     
                </div>
               
{this.selectDashboard()}
              {this.combobox}
                           
                {this.dash}
                       
            </div>
            </Styles>
           
        )
    }
}
export default Scenathon;   

