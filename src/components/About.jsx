import React from 'react'
import amreenabout from '../assets/projects/amreenabout1.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About<span className='text-neutral-500'> Me</span></h2>
        <div className='flex flex-wrap '>
            <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                
                className="flex items-center justify-center">
                    <img className=" rounded-2xl mx-4 w-80" src={amreenabout} alt="about" />
                </motion.div>
               
            </div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>
                        I'm a recent graduate with a passion for technology and a strong foundation 
                        in Python, HTML, CSS, JavaScript, React JS, Django, Data Analysis, and SQL. 
                        Throughout my academic journey, I have honed my skills by working on various projects 
                        that involved developing web applications, analyzing data sets, and creating efficient algorithms.
                        I am particularly interested in software development and data-driven roles where I can apply my 
                        technical skills and problem-solving abilities. My experience includes building responsive web applications using modern
                        frameworks, performing data analysis to drive insights, and working with databases to manage and retrieve data effectively.

                        As a fresher, I am eager to contribute to a dynamic team where I can continue 
                        to learn and grow. I am open to opportunities that allow me to leverage my skills while gaining hands-on 
                        experience in the industry. I am highly motivated, adaptable, and ready to tackle new challenges in the tech world."



                        </p>
                    </div>
                </motion.div>
        </div>
      
    </div>
  )
}

export default About
