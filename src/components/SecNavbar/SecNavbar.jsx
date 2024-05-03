import React from 'react'
import { Link } from 'react-router-dom'; 
import style from './SecNavbar.module.css'

function SecNavbar() {
  return (
    <div className={style.container}>
    <div className={style.secBlocks}>
      <div className={style.block}>
        <Link to="/Home"><h2>Home Page</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/CreatPatient"><h2>Create New Patient File</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/PatientAppointments"><h2>Manage Patient Appointments</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/PersonalDataManagement"><h2>Personal Data Management</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/FinancialManagement"><h2>Financial Management</h2></Link>
      </div>
      <div className={style.block}>
        <Link to="/logout"><h2>Logout</h2></Link>
      </div>
    </div>
  </div>
    
  )
}

export default SecNavbar