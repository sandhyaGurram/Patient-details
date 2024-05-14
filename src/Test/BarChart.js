import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";

import useCustomHook from './CustomHook';
import { Chart as ChartJS } from "chart.js/auto"
import axios from 'axios';
import GetDiagnosisHistory from './GetDiagnosisHistory';


const BarChart = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get('https://fedskillstest.coalitiontechnologies.workers.dev',{ auth: {
            username: 'coalition',
            password: 'skills-test'
        }})
        .then((res)=>{
            const result= res.data.filter(d=>d.name==='Jessica Taylor')
            setdata(result)
            console.log(result[0])
            })
       
    },[])

    
  const monthAbbreviations = {
    "January": "Jan",
    "February": "Feb",
    "March": "Mar",
    "April": "Apr",
    "May": "May",
    "June": "Jun",
    "July": "Jul",
    "August": "Aug",
    "September": "Sep",
    "October": "Oct",
    "November": "Nov",
    "December": "Dec"
  };
  
  const getMonthAbbreviation = (fullMonthName) => {
    return monthAbbreviations[fullMonthName];
  };

   
    const userData=({
     labels:data.length>0 && data[0]?.diagnosis_history.slice(0,7).map(d=>`${getMonthAbbreviation(d.month)} - ${d.year}`),
     datasets:[{
       label:"Systolic",
       data:data.length>0 && data[0]?.diagnosis_history.map(v=>v.blood_pressure.systolic.value)
     },
     {
        label:"Diastolic",
        data:data.length>0 && data[0]?.diagnosis_history.map(v=>v.blood_pressure.diastolic.value)
      }]
   })

  return (
    <div className='p-5'>
      <h4 className='text-start'>Daignostic History</h4>
      <Line data={userData} />
<div>
<GetDiagnosisHistory/>
</div>
    
    </div>

    
    
    
  )
}

export default BarChart