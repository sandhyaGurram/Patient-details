import React from 'react'
import birth from './images/BirthIcon.png'
import gender from './images/FemaleIcon.png'
import phone from './images/PhoneIcon.png'
import insurance from './images/InsuranceIcon.png'

import useCustomHook from './CustomHook'

const DetailsJessica = () => {
  const data = useCustomHook('https://fedskillstest.coalitiontechnologies.workers.dev')

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

//   const abbreviateMonth = (dateString) => {
//     const date = new Date(dateString);
//     const options = { month: 'short' };
//     return date.toLocaleDateString('en-US', options);
//   };


  return (
    <div className='fulldetails'>
      {data.map((item) => {
        return (
          <>
            <img src={item.profile_picture}></img>
            <p><strong>{item.name}</strong></p>
            <div className='row'>
              <div className='col-2'>
                <img src={birth}></img>
              </div>
              <div className='col-10'>
                <p>Date of Birth</p>
                <p><strong>{formatDate(item.date_of_birth)}</strong></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={gender}></img>
              </div>
              <div className='col-10'>
                <p>Gender</p>
                <p><strong>{item.gender}</strong></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={phone}></img>
              </div>
              <div className='col-10'>
                <p>Contact Info</p>
                <p><strong>{item.phone_number}</strong></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={phone}></img>
              </div>
              <div className='col-10'>
                <p>Emergency contact</p>
                <p><strong>{item.emergency_contact}</strong></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={insurance}></img>
              </div>
              <div className='col-10'>
                <p>Insurance Provider</p>
                <p><strong>{item.insurance_type}</strong></p>
              </div>
            </div>
            <div>
              <button>Show All Information</button>
            </div>
          </>
        )
      })}

    </div>
  )
}

export default DetailsJessica