import React, { useState } from "react";
import style from "./financialManagement.module.css";
import SecNavbar from "../../components/SecNavbar/SecNavbar";

function FinancialManagement() {
  const [sessionId, setSessionId] = useState("");
  const [sessionCost, setSessionCost] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddSession = () => {
    if (sessionId && !isNaN(sessionCost) && !isNaN(discountPercentage)) {
      const discountedCost = sessionCost * (1 - discountPercentage / 100);
      const newTotalCost = parseFloat(discountedCost);
      setTotalCost(newTotalCost);
      printData(sessionId, newTotalCost);
      setSessionId("");
      setSessionCost(0);
      setDiscountPercentage(0);
    } else {
      alert("Please fill all fields with valid numbers");
    }
  };

  const handleDiscountChange = (e) => {
    let discount = parseInt(e.target.value);
    if (discount < 0) {
      discount = 0;
    }
    setDiscountPercentage(discount);
  };

  const handleCostChange = (e) => {
    setSessionCost(parseInt(e.target.value));
  };

  const printData = (id, cost) => {
    console.log({ id, totalCost: cost.toFixed(2) });
    // setTotalCost(0);
  };

  return (
    <div>
      <div className={style.financialManagement}>
        <SecNavbar />
        <div className={style.financialManagementForm}>
          <div className={style.row}>
            <label>Patient ID:</label>
            <input
              type="text"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
            />
          </div>
          <div className={style.row}>
            <label>Session Cost (₪):</label>
            <input
              type="number"
              value={sessionCost}
              onChange={handleCostChange}
            />
          </div>
          <div className={style.row}>
            <label>Discount Percentage:</label>
            <input
              type="number"
              value={discountPercentage}
              onChange={handleDiscountChange}
            />
          </div>
          <div className={style.row}>
            <label>Total Cost (₪):</label>
            <input type="text" value={totalCost.toFixed(2)} readOnly />
          </div>
          <button onClick={handleAddSession}>Add Session</button>
        </div>
      </div>
    </div>
  );
}

export default FinancialManagement;
