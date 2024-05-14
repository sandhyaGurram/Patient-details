import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useCustomHook from './CustomHook'
import Heart from './images/HeartBPM.png'
import Temp from './images/temperature.png'
import resp from './images/respiratory rate.png'

const GetDiagnosisHistory = () => {
    const data = useCustomHook('https://fedskillstest.coalitiontechnologies.workers.dev')

    // Assuming 'data' contains the API response

    const diagnosisData = data[0]?.diagnosis_history.map(entry => {
        const { temperature, respiratory_rate } = entry;
        return { temperature, respiratory_rate };
    });

    console.log(diagnosisData);



    return (
        <>
            <div className='row getdetails text-center pt-3' >
                {data.length > 0 && data[0]?.diagnosis_history.slice(0, 1).map((d) => {
                    return (
                        <>
                        <div className='col-4 '>
                            <div className='card '>
                                <div className='text-center'>
                                <img src={Heart} alt='img'></img>
                                </div>
                                <div className='card-body'>
                                    <p>Respiratory Rate</p>
                                    <strong>{d.respiratory_rate.value}</strong>
                                    <p>{d.respiratory_rate.levels}</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='card'>
                            <div className='text-center'>
                                <img src={Temp} alt='img'></img>
                                </div>
                                <div className='card-body'>
                                    <p>Temperature</p>
                                    <strong>{d.temperature.value}</strong>
                                    <p>{d.temperature.levels}</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='card'>
                            <div className='text-center'>
                                <img src={resp} alt='img'></img>
                                </div>
                                <div className='card-body'>
                                    <p>Heart Rate</p>
                                    <strong>{d.heart_rate.value}</strong>
                                    <p>{d.heart_rate.levels}</p>
                                </div>

                            </div>
                        </div>
                        </>
                    )
                })}

            </div>

        </>

    )
}

export default GetDiagnosisHistory