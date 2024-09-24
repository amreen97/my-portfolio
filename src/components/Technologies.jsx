import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'
import  djangoicon  from '../assets/django.jpg'
import { MdOpacity } from 'react-icons/md'

const iconVariants=(duration)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-t-neutral-800 pb-24'>
        <motion.h1 whileInView={{ opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
          className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div >
            <motion.div variants={iconVariants(2)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl bg-yellow-200 text-green-400'/>
            </motion.div >
            <motion.div  variants={iconVariants(3)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <img  className='text-7xl text-cyan-400 mx-2 w-20' src={ djangoicon} alt=" django"/>
            </motion.div >
            <motion.div variants={iconVariants(6)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className='text-7xl text-yellow-300'/>
            </motion.div >
            
        </motion.div>
      
    </div>
  )
}

export default Technologies
