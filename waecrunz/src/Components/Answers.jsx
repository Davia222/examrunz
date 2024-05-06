import React from 'react'
import image1 from "../assets/technical drawing questions and answers/number1.jpeg"
import image2 from "../assets/technical drawing questions and answers/number2.jpeg"
import image3 from "../assets/technical drawing questions and answers/image3.jpeg"
import image4 from "../assets/technical drawing questions and answers/image4.jpeg"
import image5 from "../assets/technical drawing questions and answers/image5.jpeg"
import image6 from "../assets/technical drawing questions and answers/image6.jpeg"
import image7 from "../assets/technical drawing questions and answers/image7.jpeg"
import image8 from "../assets/technical drawing questions and answers/image7.jpeg"


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

    <img src={image3} alt="" />

    <img src={image4} alt="" />

    <img src={image5} alt="" />

    <img src={image6} alt="" />

    <img src={image7} alt="" />

    <img src={image8} alt="" />

    Answers loading  . . .

    
    </>
  )
}

export default Answers
