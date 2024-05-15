import { Link } from "react-router-dom";
import style from "./Banner.module.css";
import bannerImg from "./assets/img/logoHom.jpg";

function Banner() {
  return (
    <div className={style.banner}>
      <div className={style.banInf}>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
            <Link to="/register">Register</Link>
          </li> */}
          </ul>
        </nav>
        <h2>NephroClinic</h2>
        {/* <h2>NephroX<span className={style.nameCl}> (Doctor Management System )</span></h2> */}
      </div>

      <div className={style.bannerImg}>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
}

export default Banner;
