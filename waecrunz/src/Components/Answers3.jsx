import React from 'react'
import image1 from "../assets/chemistry/chemistry prac.jpg"
import image2 from "../assets/chemistry/chemistry prac2.jpg"
import image3 from "../assets/chemistry/chemistry prac3.jpg"
import image4 from "../assets/chemistry/chemistry prac4.jpg"


function Answers3() {
  return (
    <>
   
    <div className='addHeight'></div>

    <div className='centerMe'>

    <h1>Chemistry Practical</h1>
<br />
    <p className='obj'>###--- Questions ---###</p>
    <br />
    <br />

<img src={image1} alt="" className='agricImg'/>
<br />
<br />
<img src={image2} alt="" className='agricImg' />
<br />
<br />
<img src={image3} alt="" className='agricImg' />
<br />
<br />
<img src={image4} alt="" className='agricImg' />

    <br />
    <p></p>
    <p></p>
    <p></p>
    <p></p>

<br />
   

    <br />

    <p className='essay'></p>

    <br />


   <p className='essay'>Answers 👇 👇 👇</p>

   </div>
    </>
  )
}

export default Answers3
