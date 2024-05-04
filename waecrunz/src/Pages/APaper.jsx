import React, { useState } from 'react'
import InputPin from '../Components/inputPin'
import Answers from '../Components/Answers'



function APaper() {

  const [openPaper, setOpenPaper] = useState(true)
  const [closePaper, setclosePaper] = useState(false)

  return (
    <>
    {openPaper && <InputPin setOpenPaper={setOpenPaper} setclosePaper={setclosePaper} />}
    {closePaper && <Answers/>}

    </>
  )
}

export default APaper
