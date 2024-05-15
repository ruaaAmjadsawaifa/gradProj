// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import styel from "./NotFound.module.css"; // Importing the style file

function NotFound() {
  return (
    <>
      <div className={styel.notfound}></div>
      <div className={styel.errorContainer}>
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <p>Sorry, the page you are looking for could not be found.</p>
        <Link to="/" className={styel.btn}>
          Go back to Home Page
        </Link>
      </div>
    </>
  );
}

export default NotFound;
