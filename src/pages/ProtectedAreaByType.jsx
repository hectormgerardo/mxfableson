import React from "react";
import BarChart from "../componentes/BarChart.jsx";
import data from '../data/Protected.json';

const drawProtected = (props) => {

    const convertir=(props)=> {
 
        var dataUno=[]
        var dataDos=[]
        var dataTres=[]
        var labels=[]
      
          
         props.map((item) => {
          dataUno.push(item.ProtectedAreasOther);
          dataDos.push(item.ProtectedAreasForest);
          dataTres.push(item.ProtectedAreasOtherNat);
          labels.push(item.Year);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Protected Areas Forest",
              data:dataDos,
              fill:false,
              type:"bar",
              backgroundColor:"Green",
              borderColor:"Green",
              hoverBackgroundColor:"Green",
              hoverBorderColor:"Green",
              yAxisID:"y-axis-1"
             },
             {
              label:"Protected Areas Other",
              data:dataUno,
              fill:false,
              type:"bar",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"#Red",
              yAxisID:"y-axis-1"
             },{
                label:"Protected Areas OtherNat",
                data:dataTres,
                fill:false,
                type:"bar",
                backgroundColor:"Yellow",
                borderColor:"Yellow",
                hoverBackgroundColor:"Yellow",
                hoverBorderColor:"Yellow",
                yAxisID:"y-axis-1"
               }
           ]
        }
      
       return data
      } 




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
    title="Protected Areas By Type"/>;
  }
  export default drawProtected;