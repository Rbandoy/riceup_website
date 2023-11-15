import { motion } from 'framer-motion'

export function GetStartedButton(){
  return (
      <div
        className="flex justify-center  md:justify-start">
        <motion.a   
        animate={{scale: [1, 1.1, 1]}}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1, repeat: Infinity }}
        href='#'
          className="hover:bg-secondary border-4 border-secondary-500/50 bg-primary font-bold text-primaryText mx-4 md:px-[70px] pt-5 p-5 baseline rounded-full">
          Get Started</motion.a>
      </div>
  )
}