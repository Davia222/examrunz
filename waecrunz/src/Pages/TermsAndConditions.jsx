import React, { useEffect } from 'react'


function TermsAndConditions() {

    useEffect(()=>{
       window.scrollTo(0,0)
    },[])

  return (
    <>
    <section className='disclaimerPage'>
        <h1 style={{textAlign:"center"}}>Terms and Conditions:</h1>

        <p>By using examrunz.com.ng, you agree to be bound by the following terms and conditions:</p>

        <p>Website Usage: Users are granted a limited, non-exclusive, and non-transferable license to access and use the services provided on examrunz.com.ng for personal and educational purposes only. Unauthorized use of the website's content or services may result in legal action.</p>

        <p>Accuracy of Information: While we strive to ensure the accuracy and reliability of the information provided on examrunz.com.ng, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website's content or services. Users acknowledge that any reliance on such information is at their own risk.</p>

        <p>Intellectual Property: All content, including text, graphics, logos, images, and software, on examrunz.com.ng is the property of examrunz.com.ng and is protected by copyright and other intellectual property laws. Users are prohibited from reproducing, distributing, modifying, or creating derivative works from any content on the website without prior written consent.</p>

        <p>No Refunds: All purchases made on examrunz.com.ng are non-refundable. Once a user has purchased a product or service, including but not limited to study materials, guides, or subscriptions, no refunds will be provided under any circumstances.</p>

        <p>Limitation of Liability: In no event shall examrunz.com.ng or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of or inability to use the website or its services, even if advised of the possibility of such damages.</p>

        <p>Modification of Terms: Examrunz.com.ng reserves the right to modify or update these terms and conditions at any time without prior notice. Users are responsible for reviewing the terms periodically for changes. Continued use of the website after the posting of modifications constitutes acceptance of the updated terms and conditions.</p>

        <p>By accessing and using examrunz.com.ng, users agree to abide by these terms and conditions. We reserve the right to modify or update this disclaimer at any time without prior notice. Users are advised to review this disclaimer periodically for any changes.</p>

<p>For inquiries or concerns regarding this disclaimer, please contact us at <a href="mailto:daviracle2@gmail.com">contact.examrunz.com.ng</a></p>

    </section>
    </>
  )
}

export default TermsAndConditions