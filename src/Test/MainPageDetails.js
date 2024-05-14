import React from 'react'
import PatientsName from './PatientsName'
import BarChart from './BarChart'
import DetailsJessica from './DetailsJessica'
import DiagnosticList from './DiagnosticList'
import LabResults from './LabResults'
import HeaderTest from './HeaderTest'
import './teststyles.css'

const MainPageDetails = () => {
  return (
    <div className='mainpage py-3'>
        <HeaderTest/>
        <div className='row m-0 p-4'>
            <div className='col-3'>
                <PatientsName/>
            </div>
            <div className='col-9'>
                <div className='row m-0'>
                    <div className='col-8 middle'>
                        <BarChart/> 
                        <DiagnosticList/>
                    </div>
                    <div className='col-3 jessicadetails'>
                        <DetailsJessica/>
                        <LabResults/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPageDetails