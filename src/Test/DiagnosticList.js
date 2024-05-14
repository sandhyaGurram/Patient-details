import React, { useEffect } from 'react'
import useCustomHook from './CustomHook'

const DiagnosticList = () => {
    const data=useCustomHook('https://fedskillstest.coalitiontechnologies.workers.dev')
 

   
  return (
    <div className='table-responsive diagnosticList p-4'>
        <h4 className='text-start'>Daignostic List</h4>
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th>Problem</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item)=>{
        return (
            <>
        {item.diagnostic_list.map((d)=>{
            return (
                <tr>
                    <td>{d.name}</td>
                    <td>{d.description}</td>
                    <td>{d.status}</td>
                </tr>
               
            )
        })}
        
        </>
        )
    })}
                
            </tbody>
        </table>
    </div>
  )
}

export default DiagnosticList