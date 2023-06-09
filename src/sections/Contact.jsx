import React from 'react'
import { FaLinkedinIn, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Contact() {
  return (
    <div className='contactDiv' id='contact'>
        <h1>Contact</h1>
        <div className='contactItemDiv'>
            <div className='contactItem'>
                <CiMail className='icon'/><p className='social'> rockettesusan@gmail.com</p>
            </div>
            <div className='contactItem'>
                <FaLinkedinIn className='icon'/><p className='social'> susanbrethauer</p>
            </div>
            <div className='contactItem'>
                <FaDiscord className='icon'/><p className='social'>creasedpaper</p>
            </div>
            <div className='contactItem'>
                <FaTwitter className='icon'/><p className='social'> @susanbrethauer</p>
            </div>
            <div className='contactItem'>
                <FaGithub className='icon'/><p className='social'> CreasedPaper</p>
            </div>
            <div className='contactItem'>
                <FaGithub className='icon'/><p className='social'> susanbrethauer</p>
            </div>
        </div>
    </div>
  )
}

export default Contact