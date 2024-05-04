import React, { useEffect } from 'react'

function Disclaimer() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <>
    <section className='disclaimerPage'>
    <h1 style={{textAlign:"center"}}>Disclaimer:</h1>

    <p>Examrunz.com.ng is a platform dedicated to providing educational resources and guidance to students. However, users must acknowledge and agree to the following:</p>

    
        <li>Information Accuracy: While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of any content on our website. Users are encouraged to verify any information obtained from this platform.</li>

        <li>Educational Purposes Only: All content, including but not limited to exam tips, study materials, and guidance, provided on examrunz.com.ng is intended for educational purposes only. It should not be considered as professional advice or substitute for consultation with qualified educators or professionals.</li>

        <li>User Responsibility: Users are solely responsible for their actions and decisions based on the information provided on examrunz.com.ng. We shall not be held liable for any loss, damage, or inconvenience arising from the use of our website or reliance on its content.</li>

        <li>Intellectual Property: All content, including text, graphics, logos, and images, on examrunz.com.ng is protected by copyright and other intellectual property laws. Users are not permitted to reproduce, distribute, or modify any content without prior authorization.</li>
    

    <p>By accessing and using examrunz.com.ng, users agree to abide by these terms and conditions. We reserve the right to modify or update this disclaimer at any time without prior notice. Users are advised to review this disclaimer periodically for any changes.</p>

    <p>For inquiries or concerns regarding this disclaimer, please contact us at <a href="mailto:daviracle2@gmail.com">contact.examrunz.com.ng</a></p>
    </section>
    </>
  )
}

export default Disclaimer