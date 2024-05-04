import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from "../assets/waecLoadingLogo.png"
import { Squash as Hamburger } from 'hamburger-react'


function Header() {

    const [headerColor, setHeaderColor] = useState("logoAndLogin")
    const [isOpen, setOpen] = useState(false)
    

    function scrollToper () {

        let colorChange =  document.documentElement.scrollTop
    
    
    if(colorChange > 200){
        setHeaderColor("changeColor")
    }
    else if (colorChange < 400){
        setHeaderColor("logoAndLogin")
    }
    

    }

    window.addEventListener("scroll", scrollToper)

  return (
    <>
    <header className={headerColor}>

<Link to='/' className="logo">

  <div className="logoImg"><img className="mainLogoImg" src={mainLogo} alt=""/></div>

  <p className="logoH1">EXAM RUNZ</p>

</Link>


<nav className="menuBar">
  <div id="hambgr">

<Hamburger toggled={isOpen} toggle={setOpen}   />

</div>

{isOpen && <ul>
  
  <ul className="menuNav2">
        <li><a href="#About">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
  </ul>}

  <ul className="menuNav">
      <li><a href="#About">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
  </ul>

  

  <Link to="workSpace" className="loginOrSignUp">WorkSpace</Link>
  
</nav>
</header>
    </>
  )
}

export default Header