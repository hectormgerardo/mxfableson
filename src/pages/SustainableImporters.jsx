import React, { Component} from 'react';
import BarChart from "../componentes/BarChart";
import ComboBoxTradeReportersImporters from "../componentes/ComboBoxTradeReporters";
import data from '../data/SustainableExporters.json';

class SustainableImporters extends Component {

  dataAux = null;
  state = {
    select: {
      Product: 'abaca',
      iteration: "4",
      scenathon_id :'6',
      column:"Import_quantity"
    }

  }

  handleChange = e => {

    this.setState({
      select: {

        ...this.state.select,
        [e.target.name]: e.target.value

      }

    })
if(this.state.select.tradeAdjusment=="after")
{
  this.state.select.tradeAdjusment="4";
}else{
  this.state.select.tradeAdjusment="3";
}


  }

  componentDidMount() {
  this.getNettrade();
  }

  getNettrade = async () => {
    try {
      console.log('flag 5')
      const body = this.state;
      const response = await fetch("http://localhost:5000/net/"+JSON.stringify(body));
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error(error)
    }
  }




  selectDashboard() {


    switch (this.state.select.Product) {
      case 'abaca':

        switch (this.state.select.tradeAdjusment) {
          case 'null':
            this.dataAux = convertir(data.combination_2);
            
            break;
          case 'after':
            //var dataAux = convertir(data.combination_1);
            //  this.dataAux = <h1>si funciono</h1>;
            break;
          case 'before':
            // var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'apple':
        switch (this.state.select.tradeAdjusment) {
          case 'null':

            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':

            break;
        }
        break;
      case 'banana':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'barley':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'beans':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'beef':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cassava':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cattle':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);

            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cattle':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cereal_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'chicken':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'chickens':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'chickens':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'chips_and_participles':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cirus_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'clove':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cocoa':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'coconut':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cocooil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'coffe':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'corn':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cottcake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cottlint':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cottoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'cotton':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'date':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'eggs':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'fiber_hard_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'fruit_soft_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'fruit_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'grape':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'grapefruit':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'groundnut':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'groundnutcake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
      case 'groundnutoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'honey':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'jute':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'lemon':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'meat_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'mech_pulp':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'milk':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'millet':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'mutton_goat':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'nuts':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'oats':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'oilpalmfruit':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;

      case 'oilseed_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'olive':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'oliveoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'onion':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'orange':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'other_oil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'other_olscake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'palm_oil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'palmkernelcake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'palmkerneloil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'peas':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pepper':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pigs':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pigs':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'piment':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pinapple':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'plantain':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pork':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'potato':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'pulses_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'repecake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'rapeoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'rapeseed':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'rice':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'rubber':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'rye':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sesame':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sesamoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sheep_goats':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sheep_goats':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sisal':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sorghum':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'soyabean':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'soycake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'soyoil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'spices_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sugarbeet':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sugarcarne':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sugarraw':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sunflcake':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sunfloil':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sunflower':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'sweet_potato':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'tea':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'tabacco':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'tomato':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'tuber_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'vegetable_other':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'wheat':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;
      case 'yams':
        switch (this.state.select.tradeAdjusment) {
          case 'null':
            var dataAux = convertir(data.combination_1);
            break;
          case 'after':
            var dataAux = convertir(data.combination_1);
            break;
          case 'before':
            var dataAux = convertir(data.combination_1);
            break;
        }
        break;

    }

  }


  render() {
    return (

      <div>
        <div>
          <ComboBoxTradeReportersImporters metodo={this.handleChange} />
        </div>

        
        {this.selectDashboard()}

        <div>
          <BarChart data={this.dataAux} title="Sustainable - net exporters" />
        </div>


      </div>


    )
  }
}


const convertir = (props) => {
  var CHN = [];
  var R_OEU = [];
  var R_CSA = [];
  var R_NEU = [];
  var ARG = [];
  var ZAF = [];
  var BRA = [];
  var IND = [];
  var CAN = [];
  var USA = []
  var AUS = [];
  var R_SSA = [];
  var DEU = [];
  var NOR = [];
  var MEX = [];
  var COL = [];
  var FIN = [];
  var MYS = [];
  var R_NMC = [];
  var R_ASP = [];
  var GBR = [];
  var labels = [];


  if (props != undefined) {
    props.map((item) => {
      //export quantity (unit 1000 tons) was replace to export_quantity 

      if (item.alpha2 === "CHN") {
        CHN.push(item.export_quantity);
      } else if (item.alpha2 === "R_OEU") {
        R_OEU.push(item.export_quantity);
      } else if (item.alpha2 === "R_CSA") {
        R_CSA.push(item.export_quantity);
      } else if (item.alpha2 === "R_NEU") {
        R_NEU.push(item.export_quantity);
      }
      else if (item.alpha2 === "ARG") {
        ARG.push(item.export_quantity);
      } else if (item.alpha2 === "ZAF") {
        ZAF.push(item.export_quantity);
      } else if (item.alpha2 === "BRA") {
        BRA.push(item.export_quantity);
      } else if (item.alpha2 === "IND") {
        IND.push(item.export_quantity);
      } else if (item.alpha2 === "CAN") {
        CAN.push(item.export_quantity);
      } else if (item.alpha2 === "USA") {
        USA.push(item.export_quantity);
      } else if (item.alpha2 === "AUS") {
        AUS.push(item.export_quantity);
      } else if (item.alpha2 === "R_SSA") {
        R_SSA.push(item.export_quantity);
      } else if (item.alpha2 === "DEU") {
        DEU.push(item.export_quantity);
      } else if (item.alpha2 === "NOR") {
        NOR.push(item.export_quantity);
      } else if (item.alpha2 === "MEX") {
        MEX.push(item.export_quantity);
      } else if (item.alpha2 === "COL") {
        COL.push(item.export_quantity);
      } else if (item.alpha2 === "FIN") {
        FIN.push(item.export_quantity);
      } else if (item.alpha2 === "MYS") {
        MYS.push(item.export_quantity);
      } else if (item.alpha2 === "R_NMC") {
        R_NMC.push(item.export_quantity);
      } else if (item.alpha2 === "R_ASP") {
        R_ASP.push(item.export_quantity);
      } else if (item.alpha2 === "GBR") {
        GBR.push(item.export_quantity);
      }

      if (!labels.includes(item.year)) {
        labels.push(item.year);
      }
    }


    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        //Aforestation ejemplo
        type: 'bar',
        label: 'CHN',
        data: CHN,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        //Aforestation ejemplo
        type: 'bar',
        label: 'GBR',
        data: GBR,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        //Aforestation ejemplo
        type: 'bar',
        label: 'R_ASP',
        data: R_ASP,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_OEU',
        data: R_OEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#7cb342',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_CSA',
        data: R_CSA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5a9bd4',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'R_NEU',
        data: R_NEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'ARG',
        data: ARG,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#00b6cb',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
      ,
      {
        type: 'bar',
        label: 'ZAF',
        data: ZAF,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'BRA',
        data: BRA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#00b6cb',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'IND',
        data: IND,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'CAN',
        data: CAN,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#9e67ab',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'USA',
        data: USA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'AUS',
        data: AUS,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '##ce7058',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'R_SSA',
        data: R_SSA,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ffa800',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'DEU',
        data: DEU,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ec407a',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'NOR',
        data: NOR,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#7ac36a',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'MEX',
        data: MEX,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#f10096',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'COL',
        data: COL,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#ffa800',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'FIN',
        data: FIN,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#5e35b1',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'MYS',
        data: MYS,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0390d0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }, {
        type: 'bar',
        label: 'R_NMC',
        data: R_NMC,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#f10096',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }
    ]
  };

  return data
}

export default SustainableImporters;