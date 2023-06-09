import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiFlask, SiScala } from "react-icons/si";

function Skills() {
  return (
    <div className='skillsDiv' id='skills'>
        <h1>Skills</h1>
        <div className='skillContainer'>
            <div className='skillItemContainer'>
                <IoLogoJavascript className='icon'/>
                <p className='skillItem'>JavaScript</p>
            </div>
            <div className='skillItemContainer'>
                <FaHtml5 className='icon'/>
                <p className='skillItem'>HTML5</p>
            </div>
            <div className='skillItemContainer'>
                <FaCss3 className='icon'/>
                <p className='skillItem'>CSS</p>
            </div>
            <div className='skillItemContainer'>
                <FaNodeJs className='icon'/>
                <p className='skillItem'>Node</p>
            </div>
            <div className='skillItemContainer'>
                <FaReact className='icon'/>
                <p className='skillItem'>React</p>
            </div>
            <div className='skillItemContainer'>
                <FaPython className='icon'/>
                <p className='skillItem'>Python</p>
            </div>
            <div className='skillItemContainer'>
                <SiFlask className='icon'/>
                <p className='skillItem'>Flask</p>
            </div>
            <div className='skillItemContainer'>
                <SiScala className='icon'/>
                <p className='skillItem'>Scala</p>
            </div>
            <div className='skillItemContainer'>
                <FaJava className='icon'/>
                <p className='skillItem'>Java</p>
            </div>
        </div>

    </div>
  )
}

export default Skills