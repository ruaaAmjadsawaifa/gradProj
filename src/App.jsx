import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Link } from 'react-router-dom';
import About from "./pages/About/components/About";
import Root from "./routes/Root";
import NotFound from "./pages/NotFound/components/NotFound";
import Login from "./pages/Login/components/Login";
import ManageSession from "./pages/ManageSession/components/ManageSession";
import CreatSession from "./pages/CreatSession/components/CreatSession";
import Home from "./pages/Home/components/Home";
import ManagePatientRecords from "./pages/ManagePatientRecords/components/ManagePatientRecords";
import FinancialManagement from "./pages/FinancialManagement/FinancialManagement";
import PatientAppointments from "./pages/PatientAppointments/PatientAppointments";
import PersonalDataManagement from "./pages/PersonalDataManagement/PersonalDataManagement";
import CreatPatient from "./pages/CreatPatient/components/CreatPatient";
import SecHome from "./pages/SecHome/SecHome";
import Register from "./pages/Register/components/Register";
import Anotaion from "./pages/Anotation/Anotaion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/About",
        element: <About />,
      },

      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "SecHome",
        element: <SecHome />,
      },
      {
        path: "Anotation",
        element: <Anotaion />,
      },

      {
        path: "/Register",
        element: <Register />,
      },

      {
        path: "/ManageSession",
        element: <ManageSession />,
      },
      {
        path: "/CreatSession",
        element: <CreatSession />,
      },
      {
        path: "/CreatPatient",
        element: <CreatPatient />,
      },
      {
        path: "PersonalDataManagement",
        element: <PersonalDataManagement />,
      },
      {
        path: "FinancialManagement",
        element: <FinancialManagement />,
      },
      {
        path: "PatientAppointments",
        element: <PatientAppointments />,
      },
      {
        path: "/ManagePatientRecords",
        element: <ManagePatientRecords />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
