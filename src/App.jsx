import React from 'react'
import Amreen from './components/Amreen';
import Hero from './components/Hero';
import About from './components/About'
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import amreenprofile from './assets/amreenprofile.jpg'

const App = () => {
  return (
    < >
    
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:bg-cyan-900'>
    
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
             <div className="container mx-8 border-spacing-1 px-12">
               <Amreen />
                <Hero />
                <About />
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
                </div>
                </div>
         
                
                  
                
             
      </>
  );
}

export default App;
