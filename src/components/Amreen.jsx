import React from 'react'
import logo from "../assets/newlogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

import { FaInstagram } from 'react-icons/fa'


const Amreen = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        < a href="www.linkedin.com/in/amreen-s-3b924b250"><FaLinkedin/></a>
        <FaGithub/>
        
        <FaInstagram/>
        </div>
        
        
      </nav>
  )
}

export default Amreen
