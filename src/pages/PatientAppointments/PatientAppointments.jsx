import React, { useState } from "react";
import style from "./PatientAppointments.module.css";
import Calendar from "react-calendar";
import SecNavbar from "./../../components/SecNavbar/SecNavbar";

function PatientAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState({
    patientId: "",
    patientName: "",
    patientPhoneNumber: "",
  });

  // قائمة بالمواعيد المحجوزة، يجب تحديث هذه القائمة عند حجز موعد جديد
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTimePicker(true);
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
    console.log(
      "Appointment booked:",
      selectedDate,
      selectedTime,
      appointmentInfo
    );

    // حجز الموعد عن طريق إضافته إلى قائمة المواعيد المحجوزة
    const newAppointment = {
      date: selectedDate,
      time: selectedTime,
    };
    setBookedAppointments([...bookedAppointments, newAppointment]);

    // إعادة تعيين الحالة لتحديد موعد جديد
    setSelectedDate(new Date());
    setSelectedTime("");
    setShowTimePicker(false);
    setAppointmentInfo({
      patientId: "",
      patientName: "",
      patientPhoneNumber: "",
    });
  };

  // الدالة التي تقوم بتحديد ما إذا كان الموعد محجوزًا بالفعل
  const isBookedAppointment = (time) => {
    return bookedAppointments.some(
      (appointment) => appointment.time === time
    );
  };

  // دالة لتحديد محتوى الخلية في التقويم
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateStr = date.toDateString();
      if (bookedAppointments.some((appointment) => appointment.date.toDateString() === dateStr)) {
        return <div className={style.bookedDate}></div>;
      }
    }
    return null;
  };

  return (
    <div className={style.patientAppointment}>
      <SecNavbar />
      <div className={style.patientAppointmentForm}>
        <div className={style.calendarContainer}>
          <label className={style.label}>Select Visit Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            navigationAriaLabel="calendar navigation"
            prev2Label={null}
            next2Label={null}
            tileContent={tileContent}
            prevLabel={<span style={{ marginRight: "5px" }}>{"<"}</span>}
            nextLabel={<span style={{ marginLeft: "5px" }}>{">"}</span>}
          />
        </div>
        <div className={style.calendarContainer}>
          {showTimePicker && (
            <>
              <label className={style.label}>Select Visit Time:</label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className={style.input}
              />
            </>
          )}
        </div>
        <div className={style.row}>
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
        </div>
        <button onClick={handleAppointmentBooking} className={style.button}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default PatientAppointments;
