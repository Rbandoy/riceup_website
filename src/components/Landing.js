import { Footer } from './Footer'
import { Home } from './Home'
import { WhyChoose } from './WhyChoose'
import { Featured } from './Featured'
import { FeaturedVariants } from './FeaturedVariants'
import { Testimonial } from './Testimonial'
import { About } from './About'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Landing() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const ops = useTransform(scrollYProgress, [0,1], [1,0])
 
  return (
    <>
 
      <motion.div 
          style={{ops}}
          ref={targetRef}
        > 
        <Home />
      </motion.div>
      {/* why choose */}
     
        <WhyChoose /> 

       {/* featured */} 
        <Featured /> 

      {/* Featured Variants */} 
        <FeaturedVariants /> 

      {/* testimonial */} 
        <Testimonial />   
    </>
  )
}