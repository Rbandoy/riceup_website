import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white mt-[10rem]"> 
      <div className="flex flex-col-reverse justify-between md:mx-[15rem] px-6 py-10 max-auto space-y-8 md:flex-row md:space-y-0">
        <div className='flex flex-col-reverse items-center space-y-2 md:flex-col md:space-y-0 md:items-start'>
          <div>
            <img className="h-10" alt="" src={require('../assets/logo.png')}/>  
          </div> 
          <div className='flex justify-center space-x-4'>
            <a href='#'>
              <img className='h-8' src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt=''/>
            </a> 
          </div>
        </div>
        <div className='flex justify-around space-x-32'>
            <div className='flex flex-col mx-4 space-y-3'>
            <motion.a 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                    href='' className='hover:text-secondary cursor-pointer'>Home</motion.a>
              <motion.a 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                href='#featured' className='hover:text-secondary cursor-pointer'>Products</motion.a>
              <motion.a 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  href='#about' className='hover:text-secondary cursor-pointer'>About</motion.a>
            </div> 
            <div className='flex flex-col mx-4 space-y-3'>
            <motion.a 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  
            href='' className='hover:text-secondary cursor-pointer'>Privacy And Policy</motion.a>
              <motion.a 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                    href='#featured' className='hover:text-secondary cursor-pointer'>Email: andoyonlinestore@gmail.com</motion.a>
              <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  className='hover:text-secondary cursor-pointer'><Link to="/policy">Privacy Policy</Link> </motion.div> 
            </div> 
        </div>
      </div> 
    </footer>
  )
}