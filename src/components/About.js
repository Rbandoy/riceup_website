import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0.5,0], [1,0])

  return (
    <section id='about'>
   
        <motion.div 
      initial={{ x:'100vw', opacity: 0, scale: 0 }}
      animate={{x: 0, opacity: 1, scale: 1}}  
      transition={{type: 'spring', stiffness: 300}}
      
    className='flex flex-col items-center mt-[3rem]'>
       
          <h1 className='font-bold text-center text-6xl md:text-left'>
              About Us
          </h1>

          <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 200}}
                  className='cursor-pointer'
                  >
          <h2 className='font-bold text-center  mt-[5rem] text-3xl mt-8'>
              Rice Up
          </h2>

          <p className='max-w-4xl text-center  mx-20 text-2xl text-secondary md:text-left'>
          is an innovative and user-friendly mobile
application designed to revolutionize the way people buy and consume rice. We
aim to provide a one-stop solution for all rice-related need by offering a wide
selection of high-quality rice products and seamless online ordering and delivery
services. Our core concept resolves around making essentials staple of rice
more accessible, convenient, and enjoyable for our customers.

          </p>
          </motion.div>
          <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  className='cursor-pointer'
                  >
          <h2 className='font-bold text-center text-3xl mt-8'>
              Mission
          </h2>

          <p className='max-w-4xl text-center mx-20 text-2xl text-secondary md:text-left'>
          Our mission is to redefine convenience in the world of rice. We are committed to
providing the highest quality rice products, sourced from trusted suppliers, and delivered
directly to the doorsteps of our customers. Our goal is to empower individuals and
families with an easy, reliable, and time-savngs way to access any varieties of rice,
ensuring that the heart of every meal is both wholesome and delicious.
                </p>
                </motion.div>
        </motion.div >   
      </section>
  )
}