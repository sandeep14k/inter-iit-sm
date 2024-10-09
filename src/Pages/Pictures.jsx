import MasonryGrid from "../Components/MasonryGrid";
import React from 'react'
import Navbar from '../Components/Navbar'
import { Typography } from "@mui/material";
import  Footer  from "../Components/Footer";

const Pictures = () => {
  return (
    <>
      <Navbar/>
      
      <MasonryGrid/>
      <Footer/>
    </>
  )
}

export default Pictures