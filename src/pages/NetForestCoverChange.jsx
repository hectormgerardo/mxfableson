import React from "react";
import MixedChart from "../componentes/MixedChart";
//filter map
//nfch=NetForestCoverChange
const drawNfch = (props) => {
 
  var data;
  console.log("clase draw->"+props.combinacion.select.GraficaType)
  
  if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
  data= convertir(props.data.combinacion_uno);
 return <MixedChart data={data}/>
} else if (props.combinacion.select.GraficaType === "group" &&  props.combinacion.select.Iteration  === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
   
   data= convertir(props.data.combinacion_dos);
 return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_tres);
 return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "group" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_cuatro);
 return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
   data= convertir(props.data.combinacion_cinco);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
   data= convertir(props.data.combinacion_seis);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_siete);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "regions" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_ocho);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Sustainaible") {
   data= convertir(props.data.combinacion_nueve);
  return <MixedChart data={data}/> 
}else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Sustainaible") {
   data= convertir(props.data.combinacion_dies);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_4" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_once);
  return <MixedChart data={data}/> 
} else if (props.combinacion.select.GraficaType === "countries" && props.combinacion.select.Iteration === "iteration_3" && props.combinacion.select.Scenario === "Current_trend") {
   data= convertir(props.data.combinacion_doce);
  return <MixedChart data={data}/> 
}

return null
}


const convertir=(props)=> {

  var data = {}; 
  data.labels=[];
  

  

   data.forest_target=[];
   data.gfw_deforestation=[]; 
   data.forest_loss=[]; 
   data.aforestation=[]; 
   data.net_forest_change=[]; 
   
   props.map((item) => {
    data.forest_target.push(item.forest_target);
    data.gfw_deforestation.push(item.GFW_deforestation);
    data.forest_loss.push(item.forest_loss);
    data.aforestation.push(item.aforestation);
    data.net_forest_change.push(item.net_forest_change);
    data.labels.push(item.Year);
    
  });
 

 return data
} 
  
 

export default drawNfch;



