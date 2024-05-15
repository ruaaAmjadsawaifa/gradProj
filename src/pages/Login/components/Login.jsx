import React from "react";
import style from "./Login.module.css";
import loginImg from "./assets/img/loginImg/kn.jpg";

function Login() {
  return (
    <div className={style.loginSection}>
      <div className={style.loginSectionForm}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.loginImg}>
              <img src={loginImg} alt="" />
            </div>
            <div className={style.loginForm}>
              <form>
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
