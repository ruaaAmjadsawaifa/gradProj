import React from 'react';
import { Link } from 'react-router-dom'; 
import style from './Navbar.module.css'; 


function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.doctorBlocks}>
        <div className={style.block}>
          <Link to="/Home"><h2>Home Page</h2></Link>
        </div>
        <div className={style.block}>
          <Link to="/creatSession"><h2>Create Therapy Session</h2></Link>
        </div>
        <div className={style.block}>
          <Link to="/manageSession"><h2>Therapeutic Session Management</h2></Link>
        </div>
        <div className={style.block}>
          <Link to="/managePatientRecords"><h2>Manage Patient Records</h2></Link>
        </div>
        <div className={style.block}>
          <Link to="/logout"><h2>Logout</h2></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
