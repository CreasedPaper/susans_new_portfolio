import React from 'react'
import { FaLinkedinIn, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Contact() {
  return (
    <div className='contactDiv'>
        <h1>Contact</h1>
        <CiMail/><p>email: rockettesusan@gmail.com</p>
        <FaLinkedinIn/><p>linkedin: susanbrethauer</p>
        <FaDiscord/><p>discord: creasedpaper#1147</p>
        <FaTwitter/><p>twitter: @susanbrethauer</p>
        <FaGithub/><p>github: CreasedPaper & susanbrethauer</p>
    </div>
  )
}

export default Contact