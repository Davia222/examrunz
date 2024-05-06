import React from 'react'
import image1 from "../assets/technical drawing questions and answers/number1.jpeg"
import image2 from "../assets/technical drawing questions and answers/number2.jpeg"

function Answers() {
  return (
    <>
    <div className='addHeight'></div>
    <p>Number 1</p>
    
    <img src={image1} alt="" />

    <br />
    <br />

    <p>Number 2</p>

    <img src={image2} alt="" />
    <br /> <br />

    <p>Number 3</p>

    <img src="" alt="" />

    Answers loading  . . .

    
    </>
  )
}

export default Answers
