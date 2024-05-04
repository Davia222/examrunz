import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home.jsx"
import './App.css'
import "./responsivity.css"
import Loading from './Components/Loading.jsx';
import ContactViaWhatsapp from './Components/ContactViaWhatsapp.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Header from './Components/Header.jsx';
import Disclaimer from './Pages/Disclaimer.jsx';
import TermsAndConditions from './Pages/TermsAndConditions.jsx';
import Privacy from './Pages/Privacy.jsx';
import "./secondCss.css"
import Workspace from './Pages/Workspace.jsx';
import "../src/workspace.css"
import "../src/activiityLog.css"
import "../src/waecExam.css"
import "../src/paper.css"
import "../src/Answers.css"
import APaper from './Pages/APaper.jsx';
import BPaper from './Pages/BPaper.jsx';
import CPaper from './Pages/CPaper.jsx';
import DPaper from './Pages/DPaper.jsx';






function App() {
 
  return (
    <>
  <BrowserRouter>
  <Loading/>

  
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<SignUp/>} />
    <Route path='disclaimer' element={<Disclaimer/>} />
    <Route path='terms' element={<TermsAndConditions/>} />
    <Route path='privacy' element={<Privacy/>} />
    <Route path='/workspace' element={<Workspace/>}></Route>
    <Route path="/workspace/paperi" element={<APaper/>}></Route>
    <Route path="/workspace/paperii" element={<BPaper/>}></Route>
    <Route path="/workspace/paperiii" element={<CPaper/>}></Route>
    <Route path='/workspace/paperiv' element={<DPaper/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
