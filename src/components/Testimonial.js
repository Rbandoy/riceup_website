import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Testimonial() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [1,0], [1,0])

  return (
    <section id='testimonial'>
      <motion.div 
         style={{opacity}}
         ref={targetRef}
         animate={{ scale: 0, opacity: 0 }} 
         whileInView={{ scale: 1, opacity: 1 }}
        transition={{type: 'spring', stiffness: 80}}
        className='mt-[13rem]'
      > 
          <div className='max-w-6xl px-5 mx-auto  text-center'>
             {/* heading */}
             <div className='flex flex-col items-center'>
              <h1 className='font-bold text-center text-6xl md:text-left'>
                  Testimonial
              </h1>
              <h2 className='font-bold text-center text-3xl mt-8'>
              What Our Customers Are Saying
              </h2>
            </div> 
             {/* testimonial */}

             <div className='flex justify-center flex-col md:flex-row md:space-x-6 mt-10'>
              {
                [
                  {
                    id: 1,
                    name: "Michael S. - Home Chef",
                    image: require('../assets/logo.png'),
                    testimony: "Rice Up has become my go-to for premium rice varieties. The quality is unmatched, and the variety keeps me coming back for more."
                  },
                  {
                    id: 1,
                    name: "Michael S. - Home Chef",
                    image: require('../assets/logo.png'),
                    testimony: "Rice Up has become my go-to for premium rice varieties. The quality is unmatched, and the variety keeps me coming back for more."
                  },
                  {
                    id: 1,
                    name: "Michael S. - Home Chef",
                    image: require('../assets/logo.png'),
                    testimony: "Rice Up has become my go-to for premium rice varieties. The quality is unmatched, and the variety keeps me coming back for more."
                  }
                ].map(item => (
                  <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}  
                  className='cursor-pointer flex flex-col items-center p-6 space-y-6 rounded-lg bg-card md:w-1/3'>
                    <img src={item.image} className='w-16 -mt-2' alt=''/>
                    <h5 key={item.id} className='text-lg font-bold'>{item.name}</h5>
                    <p className='text-md text-secondary'>{item.testimony}</p>
                  </motion.div>
                ))
              }
             </div>
          </div> 
          </motion.div>
      </section>  
  )
}