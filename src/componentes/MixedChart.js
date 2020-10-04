import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
//    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Net forest change',
        type:'scatter',
        data: [-5850.78, -7422, -9014, 9467, 31259, 27754, 21216.71,26188.79,23589.06,23448.09],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },{
        type: 'bar',
        label: 'Visitor',
        data: [16043.22098 ,8236.10422, 10663.46982, 19070.71268, 40627.99068, 28345.7487, 21590.50491,26586.30491,24055.80491,23996.20491],
        fill: false,
        backgroundColor: 'darkgreen',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      },{
        type: 'bar',
        label: 'watafa',
        data: [-21894,-15658.37, -19677.61, -19070.71268, -9368.17],
        fill: false,
        backgroundColor: 'Green',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      },
    
    ]
  };
  
  const options = {
    responsive: true,
    tooltips: {
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
            display: false
          },
          labels: ['2005', '2010', '2015', '2020', '2025', '2030', '2035','2040','2045','2050'],
          
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
  
  
  const  LineChart=(props)=> {
    return (
        <div>
          <h2>Mixed data Example</h2>
          <Bar
            data={data}
            options={options}
          />
        </div>
      );
  }
 
  
  export default LineChart;
