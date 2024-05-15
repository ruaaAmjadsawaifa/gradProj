import React from "react";
import style from "./Register.module.css";
import SecNavbar from "../../../components/SecNavbar/SecNavbar";

function Register() {
  return (
    <div className={style.registerPage}>
      <SecNavbar />
      <div className={style.registerForm}>
        <form>
          <div className={style.row}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>
          <div className={style.row}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={style.row}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={style.row}>
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" required>
              <option value="nurse">Nurse</option>
              <option value="secretary">Secretary</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
