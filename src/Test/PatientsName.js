import React, { useEffect, useState } from 'react'
// import useCustomHook from './CustomHook'
import axios from 'axios'
import './teststyles.css'
import search from './images/search_FILL0_wght300_GRAD0_opsz24.png'


const PatientsName = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get('https://fedskillstest.coalitiontechnologies.workers.dev',{ auth: {
            username: 'coalition',
            password: 'skills-test'
        }})
        .then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
        
    },[])
  return (
    <div className='patientsName patientname'>
        <div className='row p-3'>
            <div className='col'>
                <h4>Patients</h4>
            </div>
            <div className='col text-end'>
                <img src={search} />
            </div>
        </div>
        <div className='patient-table'>
        {data.map((item)=>{
            return(
                <div>
                    <table className='table table-borderless mb-4'>
                        <tbody>
                            <tr>
                                <td><img src={item.profile_picture} /></td>
                                <td className='text-start'><p><strong>{item.name}</strong></p>
                                <p>{item.gender}, {item.age}</p>
                                </td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    </div>
            )
        })}
</div>
    </div>
  )
}

export default PatientsName