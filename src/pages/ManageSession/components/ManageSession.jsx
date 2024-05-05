import React from 'react';
import styel from './ManageSession.module.css'
import Navbar from '../../../components/Navbar/Navbar';


function ManageSession() {
  return (
    <>
     <div className={styel.managSession}>
      <Navbar/>
      <form className={styel.managSessionForm} action="#">
        <div>
          <label htmlFor="primaryDiagnosis">Primary Diagnosis:</label>
          <input type="text" id="primaryDiagnosis" name="primaryDiagnosis" required />
          <label htmlFor="requestDiagnosticProcedures">Request Diagnostic Procedures:</label>
          <textarea id="requestDiagnosticProcedures" name="requestDiagnosticProcedures" required defaultValue={""} />
          <label htmlFor="finalDiagnosis">Final Diagnosis:</label>
          <input type="text" id="finalDiagnosis" name="finalDiagnosis" required />
          {/* <label for="interactiveUrologicalSystem">Interactive Urological System:</label>
          <input type="image" id="interactiveUrologicalSystem" name="interactiveUrologicalSystem" required /> */}
          <label htmlFor="carePlan">Care Plan:</label>
          <textarea id="carePlan" name="carePlan" required defaultValue={""} />
        </div>
        <div className={styel.rowBtn}>
          <button type="submit">Print Medical Reports</button>
          <button type="submit">Save</button>
        </div>
      </form>
     </div>
    </>
  );
}

export default ManageSession;
