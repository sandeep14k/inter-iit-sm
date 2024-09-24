import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Schedule from "./Pages/Schedule"
import Result from "./Pages/Result"
import Livescores from "./Pages/Livescores"
import Athletes from "./Pages/Athletes"
import './App.css'
import IITKMap from './Pages/Map'
import Contacts from './Pages/Contacts'
import QuiltedImageList from './Pages/Gallery'
import Pictures from './Pages/Pictures'

const App = () =>{
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Result' element={<Result/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
        <Route path='/Livescores' element={<Livescores/>}/>
        <Route path='/Athletes' element={<Athletes/>}/>
        <Route path='/map' element={<IITKMap/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/gallery' element={<Pictures/>}/>
      </Routes> 
    </BrowserRouter>
  </>

}

export default App