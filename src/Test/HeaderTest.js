import React from 'react'
import './teststyles.css'
import logo from './images/TestLogo.png'

import patient from './images/group_FILL0_wght300_GRAD0_opsz24.png'
import transaction from './images/credit_card_FILL0_wght300_GRAD0_opsz24.png'
import chat from './images/chat_bubble_FILL0_wght300_GRAD0_opsz24.png'
import home from './images/home_FILL0_wght300_GRAD0_opsz24.png'
import senior from './images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'


const HeaderTest = () => {
  return (


<header className=" headertest">
        <nav className="navbar navbar-expand-md ">
          <p to="/" className="navbar-brand ">
            <img src={logo} alt="" />
          </p>
          <button className="navbar-toggler" data-bs-target="#myNav" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="myNav" className="collapse navbar-collapse justify-content-end ">
            <ul className="navbar-nav">
            <li className="nav-item">
          <p  className="nav-p active" aria-current="page" to ="#"><img src={home} /> OverView</p>
        </li>
              <li className="nav-item">
          <p  className="nav-p" to ="#"><img src={patient}></img> Patients</p>
        </li>
        <li className="nav-item">
          <p  className="nav-p" to ="#"><img src={chat} />  Schedule</p>
        </li>
        <li className="nav-item">
          <p  className="nav-p" to ="#"><img src={chat} /> Message</p>
        </li>
        <li className="nav-item">
          <p  className="nav-p" to ="#"><img src={transaction} /> Transactions</p>
        </li>
        <li className="nav-item">
          <p  className="nav-p seniordoctor" to ="#">
            <table>
                <tbody className='text-center'>
                    <tr>
                        <td><img src={senior}></img></td>
                        <td><p>Dr. Jose Simmons</p>
                        <p>General practitioner</p></td>
                    </tr>
                </tbody>
            </table>
              
          </p>
        </li>

            </ul>
          </div>
        </nav>
      </header>
  
  )
}

export default HeaderTest