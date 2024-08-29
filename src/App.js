import React, {lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Schedule from "./Pages/Schedule"
import Result from "./Pages/Result"
import './App.css'

const App = () =>{
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes> 
    </BrowserRouter>
  </>

}

export default App