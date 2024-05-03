import React from 'react'

import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';

function Root() {
  return (
    <>
    <Banner/>
    <Outlet/>
    </>
  )
}

export default Root