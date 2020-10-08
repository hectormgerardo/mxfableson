import React from "react";
import MixedChart from "../componentes/MixedChart.jsx";
import data from '../data/NetForestCoverChange1.json';

//filter map
//nfch=NetForestCoverChange
const drawNfch = (props) => {
 
  let dataAux;
  console.log("clase draw->"+props.combinacion.select.GraficaType)

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_dos : data.combinacion_cuatro);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_uno : data.combinacion_tres);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_seis : data.combinacion_ocho);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_cinco : data.combinacion_siete);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_dies : data.combinacion_doce);
        break;
      case 'iteration_4':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_nueve : data.combinacion_once);

        break
    }
    break;
  }
  return <MixedChart data={dataAux}/>;
}


const convertir=(props)=> {

  let data = {}; 
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



