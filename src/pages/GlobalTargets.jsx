import React, { useState, useEffect } from "react";
import "../css/graphCharacteristics.css";
import "../css/Box.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import {Container,Row,Col,Jumbotron} from "react-bootstrap";
import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { WidthProvider, Responsive } from "react-grid-layout";
import axios from "axios";
import MixedChart from "../componentes/MixedChart";
import data from '../data/GlobalTargets.json';
import BarChart from '../componentes/BarChart'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const GlobalTargets = (props) => {
  const [dataTarget1,setDataTarget1]=useState([]);

  const chart = async() => {
    let name = [];
    let Product = [];
    let Year =[];
    let Import_quantity=[];
    console.log("cocaina1")

    try {
      console.log('flag 5')
      const body = props.combinacion;
      const response = await fetch("http://localhost:5000/net/"+JSON.stringify(body));
      const jsonData = await response.json();
      console.log(jsonData.rows[0].name);
      for (const dataObj of jsonData.rows) {
        name.push(dataObj.name);
        Product.push(dataObj.Product);
        Year.push(parseInt(dataObj.Year))
        Import_quantity.push((dataObj.Export_quantity))
      }
      console.log(Year)
      console.log(Product)
      console.log(name)
      console.log(Import_quantity)
      setDataTarget1({
        labels:Year,
         datasets:[
           {
            label:"Forest Change",
            data:Import_quantity,
            fill:false,
            type:"scatter",
            backgroundColor:"Red",
            borderColor:"Red",
            hoverBackgroundColor:"Red",
            hoverBorderColor:"Red",
            yAxisID:"y-axis-1"
           },
           {
            label:"Net Forest Change",
            data:Year,
            fill:false,
            type:"bar",
            backgroundColor:"#81c784",
            borderColor:"#81c784",
            hoverBackgroundColor:"darkgreen",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           }
         ]
      });
    } catch (error) {
      console.error(error)
    }

  };

  useEffect(() => {
    chart();
  }, []);
    

  return (
    
<div>
          <MixedChart 
            data={dataTarget1}
            title="Target 1.- Zero net deforestation"
            aspectRatio={false}
            labelposition="bottom"/>
      </div>
  );
}

export default GlobalTargets;
