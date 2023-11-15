import { delay, motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function WhyChoose() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0.5,0], [1,0])
   
  return (
    <section id='choose'>
        <motion.div 
         style={{opacity}}
         ref={targetRef} 
         animate={{ x: 300, opacity: 0 }} 
         whileInView={{ x: 0, opacity: 1 }}
         transition={{type: 'spring', stiffness: 80}} 
      > 
        <div className='grid place-content-center'> 
            <div className='flex flex-col items-center space-y-12'> 
              <motion.h1  
              className='font-bold text-center text-6xl md:text-left'>
                Why Choose Rice Up?
              </motion.h1>
              <p className='max-w-4xl mt-6 text-left sm:text-center md:mx-20 text-2xl text-secondary md:text-left'>
              Rice Up is your go-to destination for the finest quality rice grains. Discover a curated selection of premium rice varieties sourced from the best farms around the world. From Basmati to Jasmine, our rice collection is a testament to quality, flavor, and authenticity.</p>
            </div> 
        </div>
        </motion.div>
      </section>
  )
}