import React from 'react'
import "./sectionCSS/navbarCSS.css"

function NavBar() {
  return (
    <div className='navBar'>
        <div className='navItem'>
            <p className='navItemTitle'>Introduction</p>
        </div>
        <div className='navItem'>
            <p className='navItemTitle'>Skills</p>
        </div>
        <div className='navItem'>
            <p className='navItemTitle'>Projects</p>
        </div>
        <div className='navItem'>
            <p className='navItemTitle'>Contact</p>
        </div>
    
    </div>
  )
}

export default NavBar