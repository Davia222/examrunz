import React, { useEffect, useState } from 'react'



function InputPin({setOpenPaper, setclosePaper}) {

const [pin, setpin] = useState({
  pin:"",
  
})

const pinHandler = (e)=>{

  const {name, value} = e.target

  setpin((prev)=>{
    return{...prev, [name]:value}
  })
}


const [pinStatus, setPinStatus] = useState("")

const [showStatus, setShowStatus] = useState(false)

let thePin = pin.pin

const validPins = ["629953", "473821", "587149", "902374", "815024", "731594", "246810", "509283", "638745", "925617", "371846", "284931", "690357", "158702", "364871", "792435", "480365", "917246", "536289", "802573", "694178", "135790", "628734", "597821", "419583", "865791", "742681", "673829", "958163", "214597", "387906", "946172", "520479", "671592", "389245", "829417", "357926", "619754", "274638", "836159", "752941", "413875", "295346", "473615"
]



const pinChecker = ()=>{
  if( validPins.includes(thePin)){
 
    setPinStatus("Correct")
    setShowStatus(true)

    setOpenPaper(false)
    setclosePaper(true)
  
  }
  else{
    setPinStatus("Incorrect")
    setShowStatus(true)
  }


}

useEffect(()=>{
  setTimeout(() => {
    setShowStatus(false)
  }, 3000);

},[pinChecker])





  return (

  <>
    <section className='paperSec'> 

    <p style={{textAlign:"center"}}>Note: The Pin Are Random And Monitored</p>

    <em> <h1 className='noTwoDeviceH1'>"Please don't use one Pin in two devices at a time to avoid Pin-Ban"
    </h1></em>

    <em><h1 className='noTwoDeviceH1'>"This is done to Protect the privacy of the website"</h1></em>

    <div className='enterPinDiv'>

      <div className='pinInputCover'>
         <input type="text" id='PinInput' placeholder='Enter Pin' name='pin' onChange={pinHandler}/>
      </div>

      <button className='confirmBtn' onClick={pinChecker}>Confirm</button>

      


    </div>

    {showStatus && <div className='pinIncorrect'>

      <p>Pin <strong>"{thePin}"</strong> is {pinStatus}</p> 

    <p>Please try Again</p>

    <p>Or</p>

    <p>Book valid Pin</p>
    
    </div>}

   </section>

  </>
  )
}

export default InputPin
