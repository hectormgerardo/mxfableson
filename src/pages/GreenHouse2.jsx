import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/Greenhouse2.json';
//nfch=NetForestCoverChange
const greenHouse = (props) => {
 
 
   
 

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_Two : data.Greengraph_One__combination_Four);
          break;
        case 'iteration_4':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_One : data.Greengraph_One__combination_Three);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_Six : data.Greengraph_One__combination_Eight);
          break;
        case 'iteration_4':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_Five : data.Greengraph_One__combination_Seven);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_Ten : data.Greengraph_One__combination_Twelve);
        break;
      case 'iteration_4':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.Greengraph_One__combination_Nine : data.Greengraph_One__combination_Eleven);

        break
    }
    break;
  }
  


return <BarChart data={dataAux}
title="Green House 2"/> 
}


const convertir=(props)=>{
    var usa=[];
    var UK=[];
    var sweden=[];
    var south_Africa=[];
    var rwanda=[];
    var russia=[]; 
    var Rest_of_Sub_Saharan_Africa=[];
    var Rest_of_North_Africa_Middle_East_and_central_Asia=[];
    var Rest_of_European_Union=[];
    var Rest_of_Europe_non_EU28=[]
    var Rest_of_Central_and_South_America=[];
    var Rest_of_Asia_and_Pacific=[];
    var norway=[];
    var mexico=[]; 
    var malaysia=[];
    var indonesia=[]; 
    var india=[];
    var germany = [];
    var finland = [];
    var otros = [];
    var labels = [];

    if (props != undefined) {
        props.map((item) => {
          
          console.log(item.c_country_t)
            if (item.c_country_t === "USA") {
              usa.push(item.total_GHG_agric);
            }else if (item.c_country_t === "UK") {
              UK.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Sweden") {
              sweden.push(item.total_GHG_agric);
            }else if (item.c_country_t === "South Africa") {
              south_Africa.push(item.total_GHG_agric);
            }
            else if (item.c_country_t === "Rwanda") {
              rwanda.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Russia") {
              russia.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of Sub-Saharan Africa") {
              Rest_of_Sub_Saharan_Africa.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of North Africa Middle East and central Asia") {
              Rest_of_North_Africa_Middle_East_and_central_Asia.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of European Union") {
              Rest_of_European_Union.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of Europe non EU28") {
              Rest_of_Europe_non_EU28.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of Central and South America") {
              Rest_of_Central_and_South_America.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Rest of Asia and Pacific") {
              Rest_of_Asia_and_Pacific.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Norway") {
              norway.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Mexico") {
              mexico.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Malaysia") {
              malaysia.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Indonesia") {
              indonesia.push(item.total_GHG_agric);
            }else if (item.c_country_t === "India") {
              india.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Germany") {
              germany.push(item.total_GHG_agric);
            }else if (item.c_country_t === "Finland") {
              finland.push(item.total_GHG_agric);
            }else if (item.c_country_t === "otros") {
              otros.push(item.total_GHG_agric);
            }

            if(!labels.includes(item.Year))
    {
       labels.push(item.Year);
    }
        }
      

        );}

        const data = {
          labels:  labels,
           datasets: [
                {
                  //Aforestation ejemplo
                  type: 'bar',
                  label: 'Usa',
                  data: usa,
                  fill: false,
                  backgroundColor: '#faa75a',
                  borderColor: '#71B37C',
                  hoverBackgroundColor: '#71B37C',
                  hoverBorderColor: '#71B37C',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Uk',
                  data: UK,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#7cb342',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Sweden',
                  data: sweden,
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
                  label: 'South Africa',
                  data:south_Africa,
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
                  label: 'Rwanda',
                  data: rwanda,
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
                  label: 'Russia',
                  data: russia,
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
                  label: 'Rest of Sub Saharan Africa',
                  data: Rest_of_Sub_Saharan_Africa,
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
                  label: 'Rest of North Africa Middle East andcentral Asia',
                  data: Rest_of_North_Africa_Middle_East_and_central_Asia,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#0072f0',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },  {
                  type: 'bar',
                  label: 'Rest of European Union',
                  data: Rest_of_European_Union,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#9e67ab',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },  {
                  type: 'bar',
                  label: 'Rest of Europe non EU28',
                  data: Rest_of_Europe_non_EU28,
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
                  label: 'Rest of Central and South America',
                  data: Rest_of_Central_and_South_America,
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
                  label: 'Rest of Asia and Pacific',
                  data: Rest_of_Asia_and_Pacific,
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
                  label: 'Norway',
                  data: norway,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#ec407a',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Mexico',
                  data: mexico,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#7ac36a',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Malaysia',
                  data: malaysia,
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
                  label: 'Indonesia',
                  data: indonesia,
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
                  label: 'India',
                  data: india,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#5e35b1',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Germany',
                  data: germany,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#0390d0',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Finland',
                  data: finland,
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
                  label: 'Otros',
                  data: otros,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#f66d00',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                }
                
              ]
            };

            console.log(data)
       return data
    

}


export default greenHouse;