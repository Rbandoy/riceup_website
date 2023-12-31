import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {GetStartedButton} from './utility/GetStartedButton'
import { PreviewModal } from './utility/PreviewModal';
export function Home() {

  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0,1], [1,0])

  return ( 
    <section id="hero">  
     <motion.div 
    // style={{opacity}}
    // ref={targetRef}
    // animate={{ scale: 0, opacity: 0 }} 
    // whileInView={{ scale: 1, opacity: 1 }}
    // transition={{type: 'spring', stiffness: 80}} 
  >
    
    <motion.div
      initial={{x:'-100vw'}}
      animate={{x:0}}
      transition={{type: "spring", duration:1}}
      className=" flex flex-col-reverse md:flex-row items-center px-20 mx-auto space-y-0 md:space-y-0">
      {/* left item */}
      <div className="flex flex-col m-32 gap-3 ">
        <motion.h1  
          initial={{ x:'100vw', opacity: 0, scale: 0 }}
          animate={{x: 0, opacity: 1, scale: 1}} 
          whileHover={{ scale: 1.1 }}
          transition={{type: 'spring', stiffness: 300}}
          whileInView={{ scale: 1.1  }} 
          className='max-w-md text-6xl font-bold text-center md:text-7xl md:text-left'>
            <div className=' flex cursor-pointer'> 
                <motion.p
               initial={{ scale: 0 }}
               animate={{scale: 1}} 
               whileHover={{ scale: 1.3 }} 
               transition={{   type: 'spring', stiffness: 300 }} 
                >Welcome to</motion.p> 
            </div>
             
          <div className='pt-2'>
            <motion.img 
              initial={{ scale: 0 }}
              animate={{scale: 1}} 
              whileHover={{ scale: 1.3 }} 
              transition={{   type: 'spring', stiffness: 300 }} 
              className="w-70 h-40" alt="" src={require('../assets/logo.png')}/>
          </div> 
        </motion.h1 >

        <motion.p
          initial={{ scale: 0 }}
          animate={{scale: 1}} 
          whileHover={{ scale: 1.1 }} 
          transition={{   type: 'spring', stiffness: 300 }} 
          className='bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-black to-primaryText max-w-sm text-2xl text-center font-bold text-primaryText md:text-left'>
          Your One-Stop Shop for Quality Rice
          Explore a Variety of Premium Rice Grains Delivered to Your Doorstep
        </motion.p>
          <GetStartedButton />
         
      </div>
      {/* image */}
      <motion.div
        style={{opacity}} 
        initial={{ x:'-100vw' }}
        animate={{x: 20, scale: 0}} 
        whileHover={{ scale: 1.1 }} 
        whileInView={{ scale: 1, rotate: 360 }} 
        transition={{ duration:2,  type: 'spring', stiffness: 50, ease: 'easeInOut' }} 
        exit={{  rotate: 360}}
          className='md:w-1/2 ml:w-1 sm:w-[30rem]'>
        <img className='relative ' src={require('../assets/rice.jpg')} alt='' />
      </motion.div>
    </motion.div>
  </motion.div>
  </section> 
  
  )
}