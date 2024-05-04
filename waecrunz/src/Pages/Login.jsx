import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from "../assets/waecLoadingLogo.png"
import openEye from "../assets/openEye.svg"
import closeEye from "../assets/closeEye.svg"


function Login() {

  const [eye, setEye] = useState(openEye)
  const[inputType, setInputType] = useState("password")

  const eyeChanger = ()=>{
    if(eye === openEye ){
     setEye(closeEye)
     setInputType("text")
  }

  if (eye === closeEye){
    setEye(openEye)
    setInputType("password")
  }
}

const [formProperty, setFormProperty] = useState({
  email: "",
  password:""
})



const handleForm = (e)=>{
  const{name, value} = e.target
   e.preventDefault()

  setFormProperty((prev)=>{
    return {...prev, [name]: value}
  })

}

const data = [formProperty]

  return (
   <>
   <section className='login'>

    
    <div className='loginDiv'>

      <div className='welcomeBackFlexer'> <h1 className='welcomeBack'>Welcome Back!</h1>
      <img src={mainLogo} alt=""  style={{height:"70px"}}/>
      </div>

      <form action="" className='loginForm' onSubmit={handleForm}>

      <h1 className='loginH1'>Login</h1>

      <div className='emailDiv'><input type="text" name="email" id="email" placeholder='Email or Phone' onChange={handleForm}/></div>

      <div className='passwordDDiv'>
        <input type={inputType} name="password" id="password"  placeholder='Password' onChange={handleForm}/> 
        <div className='passwordEye' onClick={eyeChanger}><img src={eye} alt="" className='eyeImage' /></div>
      </div>

      

      <button className='submitLogin'>Login</button>

      </form>

      <Link to="/signup" className='signUpLink'>Don't Have An account? <span className="signUpInLogin">Sign Up</span></Link>

      <p className='dontLogin2'><strong>Please note:</strong> logging an account into two devices at a time, will result to a ban.</p>
    </div>
   </section>

   <div>{data.map((item,id) => <div key={id}>
    <p>{item.email}</p>
    <p>{item.password}</p>
    </div>)}</div>
   </>
  )
}

export default Login