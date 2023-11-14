import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function WhyChoose() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0,2], [1,0])


  return (
    <section id='choose'>
        <motion.div 
        animate={{opacity}}
        ref={targetRef}
      > 
        <div className='grid place-content-center mt-[13rem]'> 
            <div className='flex flex-col items-center'> 
              <h1 className='font-bold text-center text-6xl md:text-left'>
                Why Choose Rice Up?
              </h1>
              <p className='max-w-5xl mt-6 sm:max-w-4xl sm:mx-20 text-center text-3xl text-secondary '>
              Rice Up is your go-to destination for the finest quality rice grains. Discover a curated selection of premium rice varieties sourced from the best farms around the world. From Basmati to Jasmine, our rice collection is a testament to quality, flavor, and authenticity.</p>
            </div> 
        </div>
        </motion.div>
      </section>
  )
}