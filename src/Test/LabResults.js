import React from 'react'
import useCustomHook from './CustomHook'
import download from './images/download_FILL0_wght300_GRAD0_opsz24 (1).png'

const LabResults = () => {
    const data=useCustomHook('https://fedskillstest.coalitiontechnologies.workers.dev')
    
  return (
    <div className='mt-5 labresult p-3'>
        <h4>LabResults</h4>
        <table className='table table-borderless'>
            <tbody>
            {data.length && data[0] ?.lab_results.map((item)=>{
            return(
                <tr>
                    <td>{item}</td>
                    <td><img src={download} /></td>
                   
                </tr>
            )
        })}

            </tbody>
        </table>
        
    </div>
  )
}

export default LabResults