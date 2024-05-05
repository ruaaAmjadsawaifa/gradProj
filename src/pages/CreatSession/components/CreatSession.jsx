import React from 'react';
import style from './CreatSession.module.css';
import Navbar from '../../../components/Navbar/Navbar';

function CreatSession() {
  return (
    <>
   
     <div className={style.creatSession}>
       <Navbar/>
     <form className={style.creatSessionForm} action="#">
        <div className={style.vitalSigns}>
          <label htmlFor="systolic">Systolic:</label>
          <input type="text" id="systolic" name="systolic" required />
          <label htmlFor="diastolic">Diastolic:</label>
          <input type="text" id="diastolic" name="diastolic" required />
          <label htmlFor="pulse">Pulse:</label>
          <input type="text" id="pulse" name="pulse" required />
          <label htmlFor="temperature">Temperature:</label>
          <input type="text" id="temperature" name="temperature" required />
          <label htmlFor=" respiration">Respiration:</label>
          <input type="text" id=" respiration" name=" respiration" required />
          <label htmlFor=" o2sat"> O2sat:</label>
          <input type="text" id=" o2sat" name=" o2sat" required />
        </div>
        <div className={style.rowHW}>
            <div className={style.rowHW}>
              <label htmlFor="height">Height</label>
              <input type="text" id="height" name="height" required />
            </div>
            <div className={style.rowHW}>
              <label htmlFor="weight">Weight</label>
              <input type="text" id="weight" name="weight" required />
            </div>
        </div>
        <div>
          <label htmlFor="presentIllness">Present Illness:</label>
          <textarea id="presentIllness" name="presentIllness" required defaultValue={""} />
          <label htmlFor="diagnosticProcedures">Diagnostic Procedures:</label>
          <textarea id="diagnosticProcedures" name="diagnosticProcedures" required defaultValue={""} />
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea id="medicalHistory" name="medicalHistory" required defaultValue={""} />
          {/* <label for="interactiveUrologicalSystem">Interactive Urological System:</label>
          <input type="text" id="interactiveUrologicalSystem" name="interactiveUrologicalSystem" required /> */}
          <button type="submit" className='btnSave'>Save</button>
        </div>
      </form>
     </div>
    </>
  );
}

export default CreatSession;
