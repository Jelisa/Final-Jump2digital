import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function GraficoGalleta({dataWall,dat}) {
    console.log(dataWall)
    const labels=dat.cryptos.map((a)=>a.crypt)
  const randomColor = () => {
      let colorpicker=[]
      dataWall.forEach(element => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
        const a = Math.random();
      colorpicker.push(`rgba(${r},${g},${b},${a})`)
      });
    console.log(colorpicker)
    let data = {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: dataWall,
          backgroundColor:  colorpicker
          ,
          borderColor:colorpicker,
          borderWidth: 1,
        },
      ],
    }
    return data
    }

  const options= {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: 'Chart.js Pie Chart'
      }
    }
  }
  return <Pie data={randomColor()} options={options}/>;

}


