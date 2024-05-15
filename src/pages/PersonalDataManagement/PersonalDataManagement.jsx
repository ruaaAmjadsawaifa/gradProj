import React from "react";
import styel from "./personalDataManagement.module.css";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";
function PersonalDataManagement() {
  return (
    <div className={styel.searchSession}>
      <SecNavbar />
      <div className={styel.searchContainer}>
        <input type="text" id="searchId" placeholder="Enter patient ID..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default PersonalDataManagement;
