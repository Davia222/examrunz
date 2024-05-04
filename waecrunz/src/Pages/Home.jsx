import React, { useEffect, useState } from 'react'
import mainLogo from "../assets/waecLoadingLogo.png"
import answerSheet from "../assets/answerSheetIcon.svg"
import arrowDown from "../assets/arrowDown.svg"
import consultation from "../assets/consultation3.jpg"
import waecHall  from "../assets/waechall.jpg"
import allexam from "../assets/allexam.png"
import PictureSlider from '../Components/PictureSlider'
import slideImage1 from "../assets/sildeImage1.png"
import slideImage2 from "../assets/sildeImage2.png"
import slideImage3 from "../assets/sildeImage3.png"
import slideImage4 from "../assets/sildeImage4.png"
import whatsapp from "../assets/whatsapp.svg"
import phone from "../assets/phone.svg"
import email from "../assets/email.svg"
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import ContactViaWhatsapp from '../Components/ContactViaWhatsapp'



function Home() {

  

  



// useEffect(()=>{
//   window.scrollTo(0,0)
// },[])

let review1 = " My sister was struggling with exam anxiety and time management, but Examrunz provided the guidance and resources needed to overcome these challenges. "

let review2 = "I owe my Waec success to Examrunz.com.ng! Their resources were a game-changer in my exam"

let review3 = "NECO exam was challenging, but Examrunz made it manageable. With their support, I was able to excel in my WAEC exam"

let review4 = "Their guidance was invaluable. I passed with flying colors, thanks to them!"


const [first, setfirst] = useState(slideImage1)

const [reviews, setReviews] = useState(review1)

const[ bgColor1, setBgColor1] = useState({ backgroundColor: "#454C9B"})

const[ bgColor2, setBgColor2] = useState({ backgroundColor: "white"})

const[ bgColor3, setBgColor3] = useState({ backgroundColor: "white"})

const[ bgColor4, setBgColor4] = useState({ backgroundColor: "white"})

function changePic(){
if(first === slideImage1){
  setfirst(slideImage2)
  setReviews(review2)
  setBgColor2({backgroundColor:"#454C9B"})
  setBgColor3({backgroundColor:"white"})
  setBgColor4({backgroundColor:"white"})
  setBgColor1({backgroundColor:"white"})
}

if(first === slideImage2){
  setfirst(slideImage3)
  setReviews(review3)
  setBgColor3({backgroundColor:"#454C9B"})
  setBgColor2({backgroundColor:"white"})
  setBgColor4({backgroundColor:"white"})
  setBgColor1({backgroundColor:"white"})

}

if(first === slideImage3){
  setfirst(slideImage4)
  setReviews(review4)
  setBgColor4({backgroundColor:"#454C9B"})
  setBgColor3({backgroundColor:"white"})
  setBgColor2({backgroundColor:"white"})
  setBgColor1({backgroundColor:"white"})
}

if(first === slideImage4){
  setfirst(slideImage1)
  setReviews(review1)
  setBgColor1({backgroundColor:"#454C9B"})
  setBgColor4({backgroundColor:"white"})
  setBgColor3({backgroundColor:"white"})
  setBgColor2({backgroundColor:"white"})
}

}


function changePic2(){
  if(first === slideImage2){
    setfirst(slideImage1)
    setReviews(review1)
    setBgColor1({backgroundColor:"#454C9B"})
  setBgColor4({backgroundColor:"white"})
  setBgColor3({backgroundColor:"white"})
  setBgColor2({backgroundColor:"white"})
  }
  
  if(first === slideImage3){
    setfirst(slideImage2)
    setReviews(review2)
    setBgColor2({backgroundColor:"#454C9B"})
    setBgColor3({backgroundColor:"white"})
    setBgColor4({backgroundColor:"white"})
    setBgColor1({backgroundColor:"white"})
  }
  
  if(first === slideImage4){
    setfirst(slideImage3)
    setReviews(review3)
    setBgColor3({backgroundColor:"#454C9B"})
  setBgColor2({backgroundColor:"white"})
  setBgColor4({backgroundColor:"white"})
  setBgColor1({backgroundColor:"white"})


  }
  
  if(first === slideImage1){
    setfirst(slideImage4)
    setReviews(review4)
    setBgColor4({backgroundColor:"#454C9B"})
    setBgColor3({backgroundColor:"white"})
    setBgColor2({backgroundColor:"white"})
    setBgColor1({backgroundColor:"white"})
  }
  
  }



  return (
    <>
     <section className="firstSection">

    
<Header/>

<ContactViaWhatsapp/>
 <section className="PutCenter">
  <h1 className="examAns">Exam Answers</h1>

  <h4 className="bestWebsite"><strong style={{fontSize:"15px"}}>Trending:</strong> 2024/2025 WAEC Questions And Answers | 2024/2025 WAEC Expo/Runs (Runz)</h4>

 <div className="getAnswers">

  <Link to="workspace" className="getLink" >Get Answers Now </Link>

  <img className="answerSheetIcon" src={answerSheet} alt=""/>



</div>
  
 </section>

 <div className="arrowDown"> 
  <a href="#About"><img src={arrowDown} alt="" className="mainDownIcon"/></a>

  <a href="#About"><img src={arrowDown} alt="" className="mainDownIcon2"/></a>
 </div>
  
  <section>
    <div className="firstImg">

      <img src={consultation} alt=""/>

     

    </div>

  </section>


</section>

<section id="About">
  <h5 className="aboutH5">first You Should Know</h5>
  <h1 className="aboutH1">About <strong>Exam Runz</strong></h1>

  <div className='aboutTxtAndImg'>
    <div className='aboutTxt'>
      <h4 className='aboutTxt1'><strong>Examrunz.com.ng</strong> is the best Website for those who need 2024 Waec Expo Runs, 2024 Waec Runz, 2024 Waec Answers or 2024 Waec Questions and answers.</h4>
      
      <h3 className='aboutTxt2'><strong>Step by step on how to get 2024 WAEC Questions and Answers | 2024 </strong> </h3>

      <h4 className='aboutTxt3'><strong>Dear guest,</strong> we're aware that you're searching where to get 2024 waec expo, 2024 waec runs, waec questions and answers 2024, 2024 waec runz, waec runs, waec
questions and answers, expo, waec runs 2024, waec runz 2024, waec expo 2024, 2024 waec questions and answers.</h4>

<h4 className='aboutTxt4'>
<strong>Congratulations to you!</strong> You've come to the perfect place to get your 2024 WAEC expo, 2024 WAEC runs, WAEC runs 2024, and 2024 WAEC questions and answers.
</h4>
      </div>

    <div className='aboutImgDiv'><img src={waecHall} alt="" className='aboutImg'/></div>
  </div>
</section>


<section id='services'>

<h5 className="aboutH5">what we offer</h5>
  <h1 className="aboutH1"><strong>Exam Runz</strong> Services</h1>

  <div className='aboutTxtAndImg'>

  <div className='servicesImgDiv'><img src={allexam} alt="" className='aboutImg'/></div>


    <div className='servicesTxt'>
      <h4 className='servicesTxt1'> Over <strong>4,000</strong> of students across the African countries make excellent Result Yearly from this platform <strong>www.examrunz.com.ng</strong></h4>
      
      <h3 className='servicesTxt2'>Our candidates get their Waec exam questions and answers <strong>5 hours</strong>  before exam under us... our source remain the best of all when it come to examination assistance
specialist.</h3>

      <h4 className='servicesTxt3'>We <strong>(Exam Runz Team)</strong> collect Verified WAEC Question paper from Certified Source, Solve and deliver them to our subscribers <strong>5 hours</strong> before the exam starts, both Questions,
Objective, Theory and Practicals Answers will be delivered to them.</h4>

<h4 className='servicesTxt4'>At <strong>Examrunz.com.ng,</strong>  we strive to make your academic journey smoother by providing reliable assistance for various examinations, including NECO, WAEC, JAMB, and NABTEB. Our range of services is designed to support students in achieving their academic goals efficiently and effectively.
</h4>
      </div>

    </div>

</section>


<section id='reviews'>

<h5 className="reviewsH5">What People Say</h5>
  <h1 className="reviewsH1"><strong>Exam Runz</strong> Reviews</h1>

  <section className='reviewsDivFlexer'>

<div className='moveImgLeft' onClick={changePic2} >

  <div className='mainMoveImgLeft'>

  </div>
</div>

<div className='allReviews'>
  <img src={first} alt="" className='reviewsPic' />

  <h3 className='reviewstxt'>{reviews}</h3>

  <div className='picIndicatorDiv'>

  <div className='mainPicIndicator' style={bgColor1}></div>

  <div className='mainPicIndicator' style={bgColor2}></div>

  <div className='mainPicIndicator' style={bgColor3}></div>
  
  <div className='mainPicIndicator' style={bgColor4}></div>

  </div>

</div>

<div className='moveImgRight' onClick={changePic}>
  
  <div className='mainMoveImgRight'>

  </div>
</div>


</section>

</section>

<section id='contact'>

<h5 className="reviewsH5">Want To Reach Us?</h5>
  <h1 className="reviewsH1">Contact <strong>Exam Runz</strong> Here</h1>

<section className='contactOptionDiv'>
   <div className='contactOption'>
    <img src={phone} alt="" className='phoneIcon' /> 

    <h3 style={{textAlign:"center"}}>Phone: 07044334946</h3>

   </div>
   <a href='https://chat.whatsapp.com/IvXzSvDMfab8ImcrQrkIRw' className='contactOption'>
    <img src={whatsapp} alt="" className='whatsappIcon' />
    <a href="https://chat.whatsapp.com/IvXzSvDMfab8ImcrQrkIRw" target='_blank' style={{textAlign:"center", color:"#454C9B"}}>Whatsapp Group Link</a>
   </a>

   <div className='contactOption'>
    <img src={email} alt="" className='emailIcon' />

    <a href="mailto:daviracle2@gmail.com"  style={{textAlign:"center", color:"#454C9B"}}>contact@examrunz.com.ng</a>
   </div>

  </section> 

</section>

<section id='getStarted'>
  <Link to="workSpace" className='getStartedBtn'>Get Started</Link>
</section>

<footer>
  <div className='footerFlexer'>
    <div className='footerLogoDiv'><img src={mainLogo} alt="" className='footerLogo' /></div>
    <div className='importantLinks'>
      <a href="#About" className='footerLink'>About</a>
      <a href="#services" className='footerLink'>Services</a>
      <a href="#reviews" className='footerLink'>Reviews</a>
      <a href="#contact" className='footerLink'>Contact</a>
    </div>
    <div className='disclamerAndPrivacy'>
      <Link to="disclaimer" className='disclaimer'>Disclaimer</Link>
      <Link to="privacy" className='privacy'>Privacy</Link>
      <Link to="terms"  className='terms'>Terms And Conditions</Link>
    </div>
    </div>
 <p className='copyright'>Copyright © 2024 Examrunz.com.ng  </p>
</footer>

    </>
  )
}

export default Home