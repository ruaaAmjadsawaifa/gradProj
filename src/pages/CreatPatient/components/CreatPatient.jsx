import React from 'react';
import Banner from './../../../components/Banner/Banner';
import style from './CreatPatient.module.css';
import SecNavbar from './../../../components/SecNavbar/SecNavbar';


function CreatPatient() {
  return (
    <>
      <div className={style.creatPatient}>
        <SecNavbar/>
      <form className={style.patientForm} action="#">
   
        <div className={style.row}>
          <label htmlFor="idNum">ID Number</label>
          <input type="text" id="idNum" name="idNum" required />
        </div>
        <div className={style.row}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        
        <div className={style.row}>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" required />
        </div>
        <div className={style.row}>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* <div className={style.row}>
        <div className={style.row}>
              <label htmlFor="height">Height</label>
              <input type="text" id="height" name="height" required />
            </div>
            <div className={style.row}>
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" name="weight" required />
            </div>

        </div> */}
        <div className={style.row}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className={style.row}>
          <label htmlFor="phoneNumber">PhoneNumber</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Save</button>
      </form>
      </div>
     
    </>
  );
}

export default CreatPatient;
