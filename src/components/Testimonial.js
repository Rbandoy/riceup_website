import { motion } from 'framer-motion'

export function Testimonial() {
  return (
    <section id='testimonial'>
          <div className='max-w-6xl px-5 mx-auto mt-[12rem] text-center'>
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
          
      </section>  
  )
}