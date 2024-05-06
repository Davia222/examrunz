import React, { useEffect, useState } from 'react'
import examrunzLogo from "../assets/waecLoadingLogo.png"
import { Link } from 'react-router-dom'
import waecLogo from "../assets/waecLogo.png"
import necoLogo from "../assets/neco-logo.png"
import nabtebLogo from "../assets/nabteb.png"


function WorkspaceHeader({ openExamHandler, openExamHandler2, openExamHandler3}) {


  const [justifyContent, setJustifyContent] = useState("flex-start")

  const waecSlider = ()=>{
    setJustifyContent("flex-start")
  }

  const necoSlider = () =>{
    setJustifyContent("center")
  }

  const nabtebSlider = ()=>{
    setJustifyContent("flex-end")

  }

  const [randomNumber, setRandomNumber] = useState(1380);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 1200;
      const max = 1500;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);
    }, 5000); // Change 1000 to adjust how frequently the number changes (in milliseconds)
    
    return () => clearInterval(interval);
  }, []);

 

  return (
    <>
   <header className='workspaceHeader'>
   
   <div className='workspaceLogo'>
    <img src={examrunzLogo} alt="" className='WorkSpaceLogoImg'/>

    <p className='workSpaceLogoName'>Exam Runz</p>

    </div>


    <h1 className='workspaceH1'>Workspace</h1>

    <div className='activeUsers'>

      <p className='activeNumber'>{randomNumber}</p>

      <p className='notNeeded'>Active</p> 

      <div className='onlineIndicator'></div>

    </div>

   </header>

   <section className='workSpaceExamSec'>

    <div className='selExam'>

   <div onClick={openExamHandler}>
      <div className='waecSec' onClick={waecSlider}>

        <img src={waecLogo} alt="" className='waecLogoImg'/>

        <p>Waec</p>

        </div>

      </div>

  <div onClick={openExamHandler2}>

      <div className='waecSec' onClick={necoSlider}>

        <img src={necoLogo} alt="" className='waecLogoImg' />
        
        <p>Neco</p>
      </div>

      </div>

<div onClick={openExamHandler3}>

      <div className='waecSec' onClick={nabtebSlider}>

        <img src={nabtebLogo} alt="" className='waecLogoImg' />
        
        <p>Nabteb</p>
      </div>

      </div>


<div className='slider' style={{justifyContent:justifyContent}}>
  <div className="moveableSlider"></div>
</div>
    </div>
   </section>
    </>
  )
}

export default WorkspaceHeader
