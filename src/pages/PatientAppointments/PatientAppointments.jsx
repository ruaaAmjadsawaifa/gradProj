import React, { useState } from "react";
import style from "./PatientAppointments.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

function PatientAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false); // State to control time picker visibility
  const [appointmentInfo, setAppointmentInfo] = useState({
    patientId: "",
    patientName: "",
    patientPhoneNumber: "",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTimePicker(true); // Show time picker when date changes
    // Reset appointment info when date changes
    setAppointmentInfo({
      patientId: "",
      patientName: "",
      patientPhoneNumber: "",
    });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  };

  const handleAppointmentBooking = () => {
    // Implement necessary actions to book the appointment
    console.log("Appointment booked:", selectedDate, selectedTime, appointmentInfo);
    // Here you can send the data to a server or store it in a database
  };

  return (
    <div className={style.patientAppointment}>
      <SecNavbar />
      <div className={style.patientAppointmentForm}>
        <div className={style.row}>
          <label className={style.label}>Patient ID:</label>
          <input
            type="text"
            name="patientId"
            value={appointmentInfo.patientId}
            onChange={handleInputChange}
            className={style.input}
          />
        </div>
        <div className={style.row}>
          <label className={style.label}>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={appointmentInfo.patientName}
            onChange={handleInputChange}
            className={style.input}
          />
        </div>
        <div className={style.row}>
          <label className={style.label}>Phone Number:</label>
          <input
            type="text"
            name="patientPhoneNumber"
            value={appointmentInfo.patientPhoneNumber}
            onChange={handleInputChange}
            className={style.input}
          />
        </div>
        <div className={style.row}>
          <label className={style.label}>Select Visit Date:</label>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        {showTimePicker && (
          <div className={style.row}>
            <label className={style.label}>Select Visit Time:</label>
            <TimePicker
              onChange={handleTimeChange}
              value={selectedTime}
              className={style.input}
            />
          </div>
        )}
        <button onClick={handleAppointmentBooking} className={style.button}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default PatientAppointments;
