import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'
import ComboBox2 from '../componentes/ComboBox2'
import ComboBox3 from '../componentes/ComboBox3'

import Dashboard from '../componentes/Dashboard'
import TabSelector from '../componentes/TabSelector'

//dashboards

import SustainableExporters from '../pages/SustainableExporters'


 

class TradeReport extends Component {
    
    render() {
        return (        
            <div className="container"> 
                <div>
                    <h1>Entré a Trade Report</h1>
                    <SustainableExporters/>
                    <Dashboard/>     
                </div>                
            </div>
        )
    }
}
export default TradeReport;   

