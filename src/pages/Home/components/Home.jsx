import React from "react";
import style from "./Home.module.css";
import Navbar from "./../../../components/Navbar/Navbar";
function Home() {
  return (
    <div className={style.homePage}>
      <Navbar />
    </div>
  );
}

export default Home;
