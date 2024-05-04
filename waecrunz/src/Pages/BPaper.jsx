import React, { useState } from 'react'
import InputPin from '../Components/inputPin'
import Answers from '../Components/Answers'
import Answers2 from '../Components/Answers2'



function BPaper() {

  const [openPaper, setOpenPaper] = useState(true)
  const [closePaper, setclosePaper] = useState(false)

  return (
    <>
    {openPaper && <InputPin setOpenPaper={setOpenPaper} setclosePaper={setclosePaper} />}
    {closePaper && <Answers2/>}

    </>
  )
}

export default BPaper
