import React, { useState } from "react";
import styel from "./SecHome.module.css";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";

function SecHome() {
  const [patientData, setPatientData] = useState({ id: "", name: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "id") {
      if (!isNaN(value)) {
        setPatientData({ ...patientData, [id]: value });
      }
    } else {
      setPatientData({ ...patientData, [id]: value });
    }
  };

  const handleAddPatient = () => {
    if (patientData.id.trim() === "" || patientData.name.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Patient Data:", patientData);

    setPatientData({ id: "", name: "" });
    setError("");
  };

  return (
    <div className={styel.addPatientSession}>
      <SecNavbar />
      <div className={styel.addPatientContainer}>
        <input
          type="text"
          id="id"
          placeholder="Enter patient ID..."
          value={patientData.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="name"
          placeholder="Enter patient Name..."
          value={patientData.name}
          onChange={handleInputChange}
        />
        {error && <p className={styel.error}>{error}</p>}
        <button onClick={handleAddPatient}>Add Patient</button>
      </div>
    </div>
  );
}

export default SecHome;
