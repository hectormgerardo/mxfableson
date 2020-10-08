import React from "react";
import "../css/graphCharacteristics.css";
import "../css/Box.css";

import MixedChart2 from "../componentes/MixedChart2";
import data from '../data/GlobalTargets.json';


const drawGlobalTargets = (props) => {
  
const convertirTargetUno=(props)=> {
 
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
const convertirTargetDos=(props)=> {
 
  
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
   

 console.log(data)

 return data
} 

const convertirTargetTres=(props)=> {
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

//--------------------------------
  var dataAuxTargetUno;
  var dataAuxTargetDos;
  var dataAuxTargetTres;
  if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
   
    dataAuxTargetUno= convertirTargetUno(data.targetUno_combinacionUno);
    dataAuxTargetDos= convertirTargetDos(data.targetDos_combinacionUno);
    dataAuxTargetTres= convertirTargetTres(data.targetTres_combinacionUno);
    
 
} else if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration  === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_dos);
 return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_tres);
 return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_cuatro);
 return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_cinco);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_seis);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_siete);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_ocho);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_nueve);
  return <MixedChart2 data={dataAuxTargetUno}/> 
}else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_dies);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_once);
  return <MixedChart2 data={dataAuxTargetUno}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
  dataAuxTargetUno= convertirTargetUno(data.combinacion_doce);
  return <MixedChart2 data={dataAuxTargetUno}/> 
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
  
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
      </div>
  );
  
};

export default drawGlobalTargets;
