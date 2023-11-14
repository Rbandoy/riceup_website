import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function PrivacyPolicy() {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0.5,0], [1,0])

  return (
    <section id='about'>
   
        <motion.div 
      initial={{ opacity: 0, scale: 0 }} 
      animate={{opacity: 1, scale: 1}}  
      transition={{type: 'spring', stiffness: 300}}
      
    className='flex flex-col items-center mt-[3rem]'>
       
          <h1 className='font-bold text-center text-6xl md:text-left'>
              Privacy Policy
          </h1>

          <motion.div 
                  initial={{scale: 1}}
                  whileHover={{scale: 1.1}}
                  transition={{type: 'spring', stiffness: 200}}
                  className='cursor-pointer'
                  >
          <h2 className='font-bold text-center  mt-[5rem] text-3xl mt-8'>
            Last Updated: November 14, 2023
          </h2>

          <p className='max-w-4xl text-center  mx-20 text-2xl text-secondary md:text-left'>
          Thank you for choosing RiceUp for your rice delivery needs. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. 
          </p>
          </motion.div>

          {
            [
              {
                title: "1. Information We Collect",
                description1: `A. Personal Information: We may collect personal information, including but not limited to: Name, Contact information (email address, phone number, delivery address), Payment information.`,
                description2: `B.Usage Information: We may collect information about how you use our website, including: Pages visited, Time spent on the website, Browser type, IP address`,
              },
              {
                title: "2. How We Use Your Information",
                description1: `We use the collected information for the following purposes: Processing and fulfilling rice delivery orders, Communicating with you about your orders, Improving our website and services, Marketing and promotions (with your consent).`, 
              },
              {
                title: "3. Information Sharing",
                description1: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the purpose of delivering the purchased product or service.`, 
              },
              {
                title: "4. Security",
                description1: `We implement a variety of security measures to maintain the safety of your personal information. All sensitive information is encrypted and transmitted securely.`, 
              },
              {
                title: "5. Cookies",
                description1: `We use cookies to enhance your experience on our site. You can choose to have your computer warn you each time a cookie is being sent or turn off all cookies in your browser settings.`, 
              },
              {
                title: "6. Third-Party Links",
                description1: `Our website may contain links to third-party websites. We have no responsibility or liability for the content and activities of these linked sites.`, 
              },
              {
                title: "7. Your Consent",
                description1: `By using our website, you consent to our privacy policy.`, 
              },
              {
                title: "8. Changes to Privacy Policy",
                description1: `We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website.`, 
              },
              {
                title: "9. Children's Privacy",
                description1: `Our rice delivery website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to remove such information from our systems.`, 
              },
              {
                title: "10. Parental Consent",
                description1: `In the event that we learn that we have collected personal information from a child under the age of 13 without proper parental consent, we will take prompt steps to delete that information. If you believe that we might have any information from or about a child under the age of 13 without parental consent, please contact us at Email: andoyonlinestore@gmail.com.`, 
              },
              {
                title: "11. Contact Information",
                description1: `If you have any questions or concerns regarding our privacy policy, please contact us at Email: andoyonlinestore@gmail.com Facebook: www.facebook.com/riceup.delivery.`, 
              },
            ].map((item) => (
              <motion.div 
                    initial={{scale: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{type: 'spring', stiffness: 80}}
                    className='cursor-pointer'
                    >
                  <h2 className='font-bold text-center text-3xl mt-8'>
                      {item.title}
                  </h2>

                  <p className='max-w-4xl text-center mx-20 text-2xl text-secondary md:text-left'>
                    {item.description1}
                  </p>

                  {
                    item.description2 && (
                    <p className='max-w-4xl mt-[2rem] text-center mx-20 text-2xl text-secondary md:text-left'>
                      {item.description2}
                    </p>
                    )
                  }
                  
                </motion.div>  
            ))
          }
          </motion.div>  
      </section>
  )
}