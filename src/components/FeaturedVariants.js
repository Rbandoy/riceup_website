import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FeaturedVariants() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const scrollYProgress1 = useScroll();

  console.log(scrollYProgress1.scrollYProgress)
  const opacity = useTransform(scrollYProgress, [1,0], [1,0])

  return (
    <section id='varieties'>
      <motion.div 
    style={{opacity}}
    ref={targetRef}
    animate={{ scale: 0, opacity: 0 }} 
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{type: 'spring', stiffness: 80}}
    className='mt-[10rem]'
  >
        <div className='grid place-content-center'> 
        
            <div className='flex flex-col items-center'> 
           
              <h1 className='font-bold text-center text-6xl md:text-left'>
              Featured Rice Varieties
              </h1>

              {
                [
                  {
                    id: 1,
                    name: "1. Basmati Royale",
                    desc: "Known for its long grains and aromatic flavor, Basmati Royale is perfect for biryanis and pilafs."
                  },
                  {
                    id: 2,
                    name: "2. Jasmine Blossom",
                    desc: "Savor the fragrant and slightly sticky texture of Jasmine Blossom, ideal for Asian-inspired dishes."
                  },
                  {
                    id: 2,
                    name: "3. Wild Rice Blend",
                    desc: "Experience the nutty flavor and unique texture of our Wild Rice Blend, a versatile addition to any meal."
                  },
                ].map(item => (
                  <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 80}}
                  className='cursor-pointer'
                  >
                    <h2 className='font-bold text-center text-3xl mt-8'>
                      {item.name}
                    </h2>
                    <p className='max-w-5xl mt-6 sm:max-w-4xl sm:mx-20 text-center text-3xl text-secondary '>
                      {item.desc}
                    </p>
                  </motion.div>
                ))
              }  
              <div className='mt-[5rem]'>
                {/* <GetStartedButton /> */}
              </div>
            </div>
           
        </div>
        </motion.div>
      </section>
  )
}