import React, { useEffect } from 'react'

function Privacy() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
   <>
    <section className='disclaimerPage'>
        <h1 style={{textAlign:"center"}}>Privacy Policy:</h1>

        <p>This Privacy Policy outlines how examrunz.com.ng collects, uses, maintains, and discloses information collected from users of the website.</p>

        <p>nformation Collection:
Personal Identification Information: We may collect personal identification information from users in various ways, including but not limited to when users visit our website, register on the site, place an order, subscribe to the newsletter, respond to a survey, or fill out a form. Users may be asked for their name, email address, mailing address, phone number, or other details as appropriate.</p>

<p>Non-personal Identification Information: We may collect non-personal identification information about users whenever they interact with our website. Non-personal identification information may include the browser name, the type of computer, and technical information about users' means of connection to our website, such as the operating system and the Internet service providers utilized.</p>

        <h3>Information Usage:</h3>

        <ul>
            <li>We may use the information collected from users for the following purposes:</li>
            <li>To personalize user experience</li>
            <li>To improve our website</li>
            <li>To process transactions</li>
            <li>To send periodic emails</li>
            <li>To administer a contest, promotion, survey, or other site feature</li>
        </ul>

        <h3>Protection of User Information:</h3>
        <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of users' personal information and data stored on our website.</p>

        <h3>Sharing of Personal Information:</h3>

        <p>We do not sell, trade, or rent users' personal identification information to others.</p>

        <h3>Simultaneous Login Restriction:</h3>

        <p>Users are restricted from logging in to examrunz.com.ng from multiple devices simultaneously. Logging in from a second device will automatically log out the user from the first device.</p>

        <h3>Changes to this Privacy Policy:</h3>

        <p>Examrunz.com.ng has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

        <p>By using examrunz.com.ng, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our website.</p>

<p>For inquiries or concerns regarding this disclaimer, please contact us at <a href="mailto:daviracle2@gmail.com">contact.examrunz.com.ng</a></p>
</section>
   </>
  )
}

export default Privacy