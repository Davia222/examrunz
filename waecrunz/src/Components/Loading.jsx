import React, { useEffect, useState } from 'react'
import BarLoader from "react-spinners/BarLoader";
import waecLogo from "../assets/waecLoadingLogo.png"




function Loading() {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    },[])

  return (
   <>
   {loading && <div className='loading'>

   
   <img src={waecLogo} alt="" className='waecLogo' />
 

   <BarLoader size={25} color='#736ebc' aria-label='Loading Spinner'/>

   </div>}
   </>
  )
}

export default Loading