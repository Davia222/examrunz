import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../Components/WorkspaceHeader'
import ActivityLog from '../Components/ActivityLog'
import ContactViaWhatsapp from "../Components/ContactViaWhatsapp"
import WaceExams from '../Components/WaceExams'
import NabtebExam from '../Components/NabtebExam'
import NecoExam from '../Components/NecoExam'


function Workspace() {

  const[openExam, setOpenExam] = useState(true)
  const[openExam2, setOpenExam2] = useState(false)
  const[openExam3, setOpenExam3] = useState(false)

  const openExamHandler = ()=>{
   
  setOpenExam(true)
  setOpenExam2(false)
  setOpenExam3(false)
    
 }

 const openExamHandler2 = ()=>{
  
  setOpenExam(false)
  setOpenExam2(true)
  setOpenExam3(false)
  
 }

 const openExamHandler3 = ()=>{
  
  setOpenExam(false)
  setOpenExam2(false)
  setOpenExam3(true)
 
}


  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
   <>
  
   
  <WorkspaceHeader openExamHandler={openExamHandler}
   openExamHandler2={openExamHandler2} 
   openExamHandler3={openExamHandler3} />
  
  <ActivityLog/>

  {openExam && <WaceExams/>}

  {openExam2 && <NecoExam/>}

  {openExam3 && <NabtebExam/>}

  </>
  
  )
}

export default Workspace
