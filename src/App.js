import logo from './logo.svg';

// import "bootstrap-icons/font/bootstrap-icons.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap-icons/font/bootstrap-icons.min.css'
// import GetJessicaTaylor from './Test/GetDiagnosisHistory.js';
import DaignosticList from './Test/DiagnosticList.js';
import DetailsJessica from './Test/DetailsJessica.js';
// import ChartComponent from './Test/ChartComponent.js';
import BarChart from './Test/BarChart.js';
// import { useState } from 'react';
import useCustomHook from './Test/CustomHook.js';
import PatientsName from './Test/PatientsName.js';
import MainPageDetails from './Test/MainPageDetails.js';
import DiagnosticList from './Test/DiagnosticList.js';
import '../src/Test/teststyles.css'
import LabResults from './Test/LabResults.js';
import HeaderTest from './Test/HeaderTest.js';

function App() {
  return (
    <div className="App">
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
     
    </div>
  );
}

export default App;
