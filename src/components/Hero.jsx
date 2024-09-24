import React from 'react'
import amreenprofile from "../assets/amreenprofile.jpg"
import { motion } from "framer-motion"

const container=(delay)=>(
    {hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
    }
}
)


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='mx-6 pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl'>
                        Amreen S
                    </motion.h1>
                        
                    
                    <motion.span   
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    
                    className="mx-6 bg-gradient-to-r from-pink-300 via-slate-500
                     to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Python Developer</motion.span>
                        
                    
                     <motion.p 
                     variants={container(1.5)}
                     initial="hidden"
                     animate="visible"
                     className='my-2 mx-6 max-w-xl font-light tracking-tighter'> A passionate Computer Science graduate specialized in developing innovative software solutions. Skilled in programming
                         languages such as Python and JavaScript, with experience in web development and machine learning applications. 
                         Eager to apply my skills to solve real-world problems and contribute to a dynamic team.</motion.p>
                    <div className="w-full lg:w-1/2 lg:p-8"></div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <motion.img 
                    initial={{x:100,opacity:0}} 
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    className='mx-4 w-80 rounded-2xl'src={amreenprofile} alt="profile" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero