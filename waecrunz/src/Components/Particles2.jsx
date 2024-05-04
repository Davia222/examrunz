import React, { useEffect, useRef } from 'react'


function Particles2() {


  useEffect(() =>{
    function createDot(x, y){

    let particle = document.querySelector(".particles")
    particle.setAttribute("style", "left:" + x + "px;top:" + y + "px;")

    return particle

    }

    function anotherDot(){
      createDot(Math.floor(Math.random() *600), Math.floor(Math.random() * 600));
    }

    for (var i = 0; i < 100; i++) {
      anotherDot();
    }
   
  },[])

  return (
   <>
   <div className='particles'></div>
   </>
  )
}


export default Particles2