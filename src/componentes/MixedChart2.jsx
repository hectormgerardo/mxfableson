import React from 'react';
import {Bar} from 'react-chartjs-2';


  
  
  
  const  drawMixedChart2=(props)=> {
    console.log(props.data)
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'label',
      },legend: {
        labels:{
          boxWidth:10,
          fontSize:10,
        },
        display: true,
        
        position: 'bottom'
    },
        title: {
        display: true,
        text: props.title
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
              display: false
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
              display: false,
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
            },
            labels: {
              show: true
            }
          }
        ]
      }
      
    };

  
    return (
        <div style={{position: "relative",width:230,height:250}}>
          
          <Bar data={props.data}
                options={options}/>
        </div>
      );
  }
  export default drawMixedChart2;