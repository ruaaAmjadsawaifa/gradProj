import React, { useState } from 'react';

function FinancialManagement() {
  const [sessionId, setSessionId] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [sessionDuration, setSessionDuration] = useState('');
  const [sessionCost, setSessionCost] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [sessions, setSessions] = useState([]);

  const handleAddSession = () => {
    if (sessionId && sessionDate && sessionDuration && sessionCost) {
      const newSession = {
        id: sessionId,
        date: sessionDate,
        duration: sessionDuration,
        cost: sessionCost
      };

      setSessions([...sessions, newSession]);
      setTotalCost(totalCost + parseFloat(sessionCost));
      setSessionId('');
      setSessionDate('');
      setSessionDuration('');
      setSessionCost('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div>
      <h1>Financial Management</h1>
      <div>
        <h2>Add Session</h2>
        <label>Session ID:</label>
        <input type="text" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
        <label>Session Date:</label>
        <input type="date" value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} />
        <label>Session Duration (minutes):</label>
        <input type="number" value={sessionDuration} onChange={(e) => setSessionDuration(e.target.value)} />
        <label>Session Cost:</label>
        <input type="number" value={sessionCost} onChange={(e) => setSessionCost(e.target.value)} />
        <button onClick={handleAddSession}>Add Session</button>
      </div>
      <div>
        <h2>Sessions</h2>
        <table>
          <thead>
            <tr>
              <th>Session ID</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index}>
                <td>{session.id}</td>
                <td>{session.date}</td>
                <td>{session.duration}</td>
                <td>{session.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Total Cost: ${totalCost}</h2>
      </div>
    </div>
  );
}

export default FinancialManagement;
