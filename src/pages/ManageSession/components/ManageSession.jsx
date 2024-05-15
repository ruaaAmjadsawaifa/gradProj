import React from "react";
import { Link } from "react-router-dom";
import style from "./ManageSession.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Annotation from "./../../Anotation/Anotaion";

function ManageSession() {
  return (
    <>
      <div className={style.managSession}>
        <Navbar />
        <form className={style.managSessionForm} action="#">
          <div>
            <label htmlFor="primaryDiagnosis">Primary Diagnosis:</label>
            <input
              type="text"
              id="primaryDiagnosis"
              name="primaryDiagnosis"
              required
            />
            <label htmlFor="requestDiagnosticProcedures">
              Request Diagnostic Procedures:
            </label>
            <textarea
              id="requestDiagnosticProcedures"
              name="requestDiagnosticProcedures"
              required
              defaultValue={""}
            />
            <label htmlFor="finalDiagnosis">Final Diagnosis:</label>
            <input
              type="text"
              id="finalDiagnosis"
              name="finalDiagnosis"
              required
            />
            <label htmlFor="carePlan">Care Plan:</label>
            <textarea
              id="carePlan"
              name="carePlan"
              required
              defaultValue={""}
            />
          </div>
          <button type="submit">Save</button>
        </form>
        <div className={style.rowBtn}>
          <button>
            <svg
              fill="#5072a7"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="35px"
              height="35px"
              viewBox="-15.2 -15.2 182.35 182.35"
              xml:space="preserve"
              stroke="#006b89"
              stroke-width="0.607808"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="8.509312000000001"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M125.699,5.978c-14.63-12.186-24.597-2.889-29.202,2.818c-6.01,7.442-3.151,18.017,0.332,22.386 c2.222,2.78,3.734,5.218,4.739,7.398c-2.059,0.402-4.441,1.278-6.949,3.059c-9.057,6.438-15.289,21.024-18.641,43.566 c-3.356-22.542-9.581-37.128-18.637-43.566c-2.509-1.789-4.884-2.662-6.952-3.064c1.006-2.181,2.509-4.613,4.739-7.393 c3.479-4.369,6.344-14.944,0.336-22.386C50.854,3.089,40.89-6.208,26.259,5.978C14.089,16.121-3.864,46.462,13.116,68.02 c5.591,7.095,19.577,16.692,36.081,1.428c0,0,8.667-9.513,2.059-17.831c-1.23-1.551-2.178-3.374-2.418-5.589 c1.232,0.221,2.706,0.7,4.414,1.981c5.02,3.762,12.136,14.223,15.761,42.536c-8.208,2.02-14.131,7.453-14.131,13.894 c0,6.981,6.938,12.811,16.227,14.358c0.276,8.722,0.332,18.348,0.036,29.28l-0.101,3.875h9.848l-0.101-3.875 c-0.295-10.922-0.239-20.559,0.035-29.28c9.278-1.537,16.222-7.365,16.222-14.358c0-6.44-5.92-11.874-14.126-13.894 c3.626-28.313,10.756-38.769,15.762-42.536c1.719-1.281,3.196-1.771,4.416-1.989c-0.238,2.224-1.176,4.052-2.418,5.604 c-6.608,8.312,2.058,17.83,2.058,17.83c16.506,15.264,30.49,5.667,36.084-1.428C155.823,46.462,137.87,16.121,125.699,5.978z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Annotating an X-ray image
          </button>

          <button type="submit">
            <svg
              fill="#5072a7"
              width="35px"
              height="35px"
              viewBox="-3 -3 36.00 36.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#5072a7"
              stroke-width="0.5399999999999999"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.5 11h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm5 0h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-17 12h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-5-3h23c.277 0 .5.223.5.5s-.223.5-.5.5h-23c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-2-8C.678 9 0 9.678 0 10.5v11c0 .822.678 1.5 1.5 1.5H5v4.5c0 .822.678 1.5 1.5 1.5h17c.822 0 1.5-.678 1.5-1.5V23h3.5c.822 0 1.5-.678 1.5-1.5v-11c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v11c0 .286-.214.5-.5.5H25v-2.5c0-.664-1-.664-1 0v2.92c-.01.054-.01.108 0 .162V27.5c0 .286-.214.5-.5.5h-17c-.286 0-.5-.214-.5-.5v-4.92c.01-.054.01-.108 0-.162V19.5c.004-.282-.218-.504-.5-.5-.276.004-.504.224-.5.5V22H1.5c-.286 0-.5-.214-.5-.5v-11c0-.286.214-.5.5-.5zm5-9C5.678 1 5 1.678 5 2.5v4c0 .673 1 .656 1 0v-4c0-.286.214-.5.5-.5h17c.286 0 .5.214.5.5v4c0 .67 1 .648 1 0v-4c0-.822-.678-1.5-1.5-1.5z"></path>
              </g>
            </svg>
            Print Medical Reports
          </button>
        </div>
      </div>
    </>
  );
}

export default ManageSession;
