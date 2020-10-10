import React from 'react';
import {Bar} from 'react-chartjs-2';




//draw triple style chart
const  drawSuperGraph=(props)=> {

    const data={
        labels:[2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
         datasets:[
           {
            label:"Testiri 1",
            data:[2,3,4,5,6,7,8,9,10],
            fill:false,
            type:"line",
            backgroundColor:"Red",
            borderColor:"Red",
            hoverBackgroundColor:"Red",
            hoverBorderColor:"Red",
            yAxisID:"y-axis-1"
           },{
            label:"Testiri 2",
            data:[2,3,4,5,6,7,8,9,10],
            fill:false,
            type:"line",
            backgroundColor:"Red",
            borderColor:"Red",
            hoverBackgroundColor:"Red",
            hoverBorderColor:"Red",
            yAxisID:"y-axis-1"
           }
           ,
           {
            label:"Testiri 3",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
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
    const options = {
      responsive: true,
      title: {
        display: true,
        text: props.title
    },legend:{
      labels:{
        boxWidth:4,
        fontSize:8
      },
      position:'right'
    },tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
              stacked: true,
  
            display: true,
            gridLines: {
              display: true
            },
            
            
          }
        ],
        yAxes: [
          {
              stacked: true,
  
            type: 'linear',
            display: true,    
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: true,
            },
  
            labels: {
              show: true
            }
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            }
          ,
            labels: {
              show: true
            }
          }
        ]
      }
    };
    
  //  let data = props.data;
        
  
    return (
        <div>
       
          <Bar data={data}
                options={options}/>
        </div>
      );
  }
  export default drawSuperGraph;