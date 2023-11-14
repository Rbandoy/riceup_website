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
    style={{opacity}}
    ref={targetRef}
    animate={{ scale: 0, opacity: 0 }} 
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{type: 'spring', stiffness: 80}}
    className='mt-[15rem]'
    >
        <div className='flex flex-col items-center mt-[14rem]'>
       
          <h1 className='font-bold text-center text-6xl md:text-left'>
              About Us
          </h1>

          <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  className='cursor-pointer'
                  >
          <h2 className='font-bold text-center text-3xl mt-8'>
              Rice Up
          </h2>

          <p className='max-w-4xl text-center mx-20 text-2xl text-secondary md:text-left'>
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
        </div>  
        </motion.div>
      </section>
  )
}