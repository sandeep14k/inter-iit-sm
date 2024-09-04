import React, {lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from './Components/About'
import Schedule from "./Pages/Schedule"
import Result from "./Pages/Result"
import Athletes from "./Pages/Athletes"
import './App.css'
import IITKMap from './Pages/Map'

const App = () =>{
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Result' element={<Result/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/Athletes' element={<Athletes/>}/>
        <Route path='/map' element={<IITKMap/>}/>
      </Routes> 
    </BrowserRouter>
  </>

}

export default App