import React from "react";
import "../css/graphCharacteristics.css";
import "../css/Box.css";

import MixedChart2 from "../componentes/MixedChart2";
import data from '../data/GlobalTargets.json';


const drawGlobalTargets = (props) => {
  
const crearDataTargetUno=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Net_forest_change);
    dataDos.push(item.Forest_change_target);
   labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Forest Change",
        data:dataDos,
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
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 
const crearDataTargetDos=(props)=> {
 
  
var dataUno=[]
var dataDos=[]
var labels=[]
  
   props.map((item) => {
    dataUno.push(item.Protected_land);
    dataDos.push(item.target_Protected_land);
    labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Target Protectend Land",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Protectend Land",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }
   



 return data
} 

const crearDataTargetTres=(props)=> {
  var dataUno=[]
  var dataDos=[]
  var dataTres=[]
  var dataCuatro=[]
  var labels=[]


    props.map((item) => {
      dataUno.push(item.Biodiversity_land);
     dataDos.push(item.biod_by_year);
     dataTres.push(item.biod_target1);
     dataCuatro.push(item.biod_target3);
     labels.push(item.Year);
     
   });
   const data={
    labels:labels,
     datasets:[
       {
        label:"Biod by year",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Yellow",
        borderColor:"Yellow",
        hoverBackgroundColor:"Yellow",
        hoverBorderColor:"Yellow",
        yAxisID:"y-axis-1"
       },
       {
        label:"Biodiversity Land",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       },  {
        label:"Biod-target1",
        data:dataTres,
        fill:false,
        type:"scatter",
        backgroundColor:"black",
        borderColor:"black",
        hoverBackgroundColor:"black",
        hoverBorderColor:"black",
        yAxisID:"y-axis-1"
       }, {
        label:"Biod-target3",
        data:dataCuatro,
        fill:false,
        type:"scatter",
        backgroundColor:"orange",
        borderColor:"orange",
        hoverBackgroundColor:"orange",
        hoverBorderColor:"orange",
        yAxisID:"y-axis-1"
       }
     ]
  }

  return data
 } 
 const crearDataTargetCinco=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Kcal_feasible);
    dataDos.push(item.Target_MDER);
   labels.push(item.c_country_t);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Target (MDER)",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Kcal feasible",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 

const crearDataTargetSeis=(props)=> {
 
  var dataUno=[]
  var dataDos=[]
  var labels=[]
    
   props.map((item) => {
    dataUno.push(item.Blue_water_in_million_cubic_meters);
    dataDos.push(item.Water_target);
   labels.push(item.Year);
    
  });
 
  const data={
    labels:labels,
     datasets:[
       {
        label:"Water Target",
        data:dataDos,
        fill:false,
        type:"scatter",
        backgroundColor:"Red",
        borderColor:"Red",
        hoverBackgroundColor:"Red",
        hoverBorderColor:"Red",
        yAxisID:"y-axis-1"
       },
       {
        label:"Blue water in million cubic meters",
        data:dataUno,
        fill:false,
        type:"bar",
        backgroundColor:"#81c784",
        borderColor:"#81c784",
        hoverBackgroundColor:"darkgreen",
        hoverBorderColor:"#81c784",
        yAxisID:"y-axis-1"
       }
     ]
  }

 return data
} 

//--------------------------------
  var dataAuxTargetUno;
  var dataAuxTargetDos;
  var dataAuxTargetTres;
  var dataAuxTargetCinco;
  var dataAuxTargetSeis;
  if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
   
    dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionUno);
    dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionUno);
    dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionUno);
    dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionUno);
    dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionUno);
    

 
} else if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration  === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
 
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDos);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDos);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDos);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDos);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDos);
  
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionTres);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionTres);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionTres);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionTres);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionTres);

} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionCuatro);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionCuatro);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionCuatro);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionCuatro);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionCuatro);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
 
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionCinco);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionCinco);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionCinco);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionCinco);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionCinco);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionSeis);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionSeis);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionSeis);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionSeis);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionSeis);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionSiete);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionSiete);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionSiete);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionSiete);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionSiete);

} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionOcho);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionOcho);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionOcho);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionOcho);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionOcho);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionNueve);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionNueve);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionNueve);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionNueve);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionNueve);

}else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDies);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDies);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDies);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDies);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDies);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionOnce);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionOnce);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionOnce);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionOnce);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionOnce);

} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= crearDataTargetUno(data.targetUno_combinacionDoce);
  dataAuxTargetDos= crearDataTargetDos(data.targetDos_combinacionDoce);
  dataAuxTargetTres= crearDataTargetTres(data.targetTres_combinacionDoce);
  dataAuxTargetCinco= crearDataTargetCinco(data.targetCinco_combinacionDoce);
  dataAuxTargetSeis= crearDataTargetSeis(data.targetSeis_combinacionDoce);
}
  return (
    
    <div className="GlobalTargets"><br></br>
      <div class="wrapper">
  <div class="one">
  <div class="wrapper">
    <div class="uno">
      <MixedChart2 
        data={dataAuxTargetUno}
        title="Target 1.- Zero net deforestation"/>
        </div>
    <div class="dos">
    <MixedChart2 
        data={dataAuxTargetDos}
        title="Target 2.- Share of total land which is protected"/>
    </div>
    <div class="tres">
    <MixedChart2 
        data={dataAuxTargetTres}
        title="Target 3.- Share of land where natural processes predominate"/>
    </div>
  </div>
  </div>
  
  <div class="two">
  
  
  </div>
  
  <div class="three">
 
  <MixedChart2 
        data={dataAuxTargetCinco}
        title="Target 5.-  Food security"/>
  

  </div>
  <div class="four">
  <MixedChart2 
        data={dataAuxTargetSeis}
        title="Target 6.- Fresh water use"/>
  </div>
</div>
      </div>
  );
  
};

export default drawGlobalTargets;
