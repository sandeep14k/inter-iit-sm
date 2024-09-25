import MasonryGrid from "../Components/MasonryGrid";
import React from 'react'
import Navbar from '../Components/Navbar'
import { Typography } from "@mui/material";

const Pictures = () => {
  return (
    <>
      <Navbar/>
      <Typography variant="h2" align="center" gutterBottom>
        Gallery
      </Typography>
      <MasonryGrid/>
    </>
  )
}

export default Pictures