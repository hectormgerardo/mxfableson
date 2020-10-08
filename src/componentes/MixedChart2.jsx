import React from 'react';
import {Bar} from 'react-chartjs-2';


  
  
  
  const  drawMixedChart2=(props)=> {
    const options = {
      responsive: true,
      tooltips: {
        mode: 'label'
      },title: {
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
        <div>
          <h2></h2>
          
          <Bar data={props.data}
                options={options}/>
        </div>
      );
  }
  export default drawMixedChart2;