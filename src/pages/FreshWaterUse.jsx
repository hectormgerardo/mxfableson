import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/NetForestCoverChange1.json';



//filter map
//nfch=NetForestCoverChange
const drawFreshWaterUse= (props) => {
 
  let dataAux;

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
  return <BarChart data={dataAux}
  title="Fresh Water use"/>;
}







const convertir=(props)=> {
 
    var dataUno=[]
   
    var labels=[]
      
     props.map((item) => {
      dataUno.push(item.million_cubic_metres);
     labels.push(item.Year);
      
    });
   
    const data={
      labels:labels,
       datasets:[
         {
          label:"million cubic metres",
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









export default drawFreshWaterUse;
