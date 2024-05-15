import React from "react";
import Navbar from "./../../../components/Navbar/Navbar";
import styel from "./ManagePatientRecords.module.css";

function ManagePatientRecords() {
  return (
    <>
      <div className={styel.searchSession}>
        <Navbar />
        <div className={styel.searchContainer}>
          <input type="text" id="searchId" placeholder="Enter patient ID..." />
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default ManagePatientRecords;
