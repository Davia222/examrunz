import React, { useState } from 'react'
import Answers3 from '../Components/Answers3'
import InputPin from '../Components/inputPin'
import Answers4 from '../Components/Answers4'



function DPaper() {
 
  const [openPaper, setOpenPaper] = useState(true)
  const [closePaper, setclosePaper] = useState(false)

  return (
    <>
    {openPaper && <InputPin setOpenPaper={setOpenPaper} setclosePaper={setclosePaper} />}
    {closePaper && <Answers4/>}

    </>
  )
}

export default DPaper
