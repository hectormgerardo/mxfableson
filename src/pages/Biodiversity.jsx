import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/Biodiversity.json';
//nfch=NetForestCoverChange
const drawBiodiversity = (props) => {
 
 
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
  


return <BarChart data={dataAux}/> 
}

//prueba
const convertir=(props)=> {

  var data = {}; 
  data.labels=[];
  

  
 
   data.c_country_t=[];
   data.Protected_land_Mexico=[]; 
   data.Protected_land_Colombia=[]; 
   data.Protected_land_Argentina=[];
   data.Protected_land_Alemania=[];
   data.Protected_land_Canada=[];
   data.Protected_land_Indonesia=[]; 
   data.Protected_land_China=[]; 
   data.Protected_land_Ethiopia=[]; 
   data.Protected_land_Russia=[]; 
   data.Protected_land_Australia=[];
   data.Protected_land_Brazil=[];
   data.Protected_land_Rest_of_European_Union=[];
   data.Protected_land_Sweden=[];
   data.Protected_land_USA=[];

   data.Protected_land_Rest_of_Central_and_South_America=[];
   data.Rest_of_North_Africa_Middle_East_and_central_Asia=[];
   data.Protected_land_Rest_of_Asia_and_Pacific=[];
   data.Protected_land_Germany=[];
   data.Protected_land_South_Africa=[];
   data.Rest_of_Sub_Saharan_Africa=[];
   data.Protected_land_Otros=[];
   if(props!=undefined){
   props.map((item) => {
   
    if(item.c_country_t==="Mexico"){
    data.Protected_land_Mexico.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Colombia"){
      data.Protected_land_Colombia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Argentina")
    {
      data.Protected_land_Argentina.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Alemania")
    {
      data.Protected_land_Alemania.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Canada")
    {
      data.Protected_land_Canada.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Indonesia")
    {
      data.Protected_land_Indonesia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Ethiopia")
    {
      data.Protected_land_Ethiopia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Russia")
    {
      data.Protected_land_Russia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Australia")
    {
      data.Protected_land_Australia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Brazil")
    {
      data.Protected_land_Brazil.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="Rest of European Union")
    {
      data.Protected_land_Rest_of_European_Union.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="Sweden")
    {
      data.Protected_land_Sweden.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="USA")
    {
      data.Protected_land_USA.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="China")
    {
      data.Protected_land_China.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Central and South America")
    {
      data.Protected_land_Rest_of_Central_and_South_America.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of North Africa Middle East and central Asia")
    {
      data.Rest_of_North_Africa_Middle_East_and_central_Asia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Asia and Pacific")
    {
      data.Protected_land_Rest_of_Asia_and_Pacific.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Germany")
    {
      data.Protected_land_Germany.push(item.Protected_land*100); 
    }else if(item.c_country_t==="South Africa")
    {
      data.Protected_land_South_Africa.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Sub-Saharan Africa")
    {
      data.Rest_of_Sub_Saharan_Africa.push(item.Protected_land*100); 
    }else if(item.c_country_t==="otros")
    {
      data.Protected_land_Otros.push(item.Protected_land*100); 
    }

    if(!data.labels.includes(item.Year))
    {
      data.labels.push(item.Year);
    }
   }
 

  );}

  console.log(data.Protected_land_Otros)
 return data
} 
  






export default drawBiodiversity;



