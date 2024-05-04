import React, { useState } from 'react'
import InputPin from '../Components/inputPin'
import Answers3 from '../Components/Answers3'


function CPaper() {
 
  const [openPaper, setOpenPaper] = useState(true)
  const [closePaper, setclosePaper] = useState(false)

  return (
    <>
    {openPaper && <InputPin setOpenPaper={setOpenPaper} setclosePaper={setclosePaper} />}
    {closePaper && <Answers3/>}

    </>
  )
}

export default CPaper
