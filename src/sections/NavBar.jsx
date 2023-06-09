import React from 'react'
import "./sectionCSS/navbarCSS.css"

function NavBar() {
  return (
    <div className='navBar'>
        <div className='navItem'>
            <a href='#intro' className='headItem'>
            <p className='navItemTitle'>About Me</p>
            </a>
        </div>
        
        <div className='navItem'>
            <a href='#skills' className='headItem'>
            <p className='navItemTitle'>Skills</p>
            </a>
        </div>
        <div className='navItem'>
        <a href='#projects' className='headItem'>
            <p className='navItemTitle'>Projects</p>
            </a>
        </div>
        <div className='navItem'>
            <a href='#contact' className='headItem'>
            <p className='navItemTitle'>Contact</p>
            </a>
        </div>
    
    </div>
  )
}

export default NavBar