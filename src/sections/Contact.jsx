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
                <a href="https://www.linkedin.com/in/susanbrethauer/" className='contactLink'>
                    <FaLinkedinIn className='icon'/><p className='social'> susanbrethauer</p>
                    </a>
                </div>
            <div className='contactItem'>
                <FaDiscord className='icon'/><p className='social'>creasedpaper</p>
            </div>
            

                <div className='contactItem'>
                <a href="https://www.twitter.com/susanbrethauer" className='contactLink'>
                    <FaTwitter className='icon'/><p className='social'> @susanbrethauer</p>
                    </a>
                </div>
           

                <div className='contactItem'>
                <a href="https://github.com/CreasedPaper/" className='contactLink'>
                    <FaGithub className='icon'/><p className='social'> CreasedPaper</p>
                    </a>
                </div>

                <div className='contactItem'>
                <a href="https://github.com/susanbrethauer" className='contactLink'>
                    <FaGithub className='icon'/><p className='social'> susanbrethauer</p>
                    </a>
                </div>
            
            
        </div>
    </div>
  )
}

export default Contact