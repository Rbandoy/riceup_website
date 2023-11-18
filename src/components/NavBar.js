import { useReducer, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PreviewModal } from './utility/PreviewModal';
const NavMenu = [
  {name: "Home", link: "/home"},
  {name: "Products", link: "/"}, 
  {name: "About Us", link: "/about"},
  {name: "Privacy Policy", link: "/policy"}
]

export function NavBar() {
  const [hamburger, setHamburger] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const [loginModal, setLoginModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function closeModal() {
    setLoginModal(false)
  }

  
  return (
    <nav className={`bg-white p-4 ${
      scrolling ? 'bg-opacity-80' : ''
    }`}>
    <div className={`${
      scrolling ? 'opacity-100' : ''
    } container mx-auto flex justify-between items-center`}>
      <div className="text-white font-bold text-lg">
        <img className="w-20 h-auto" alt="" src={require('../assets/logo.png')}/> 
      </div>
      <div className="flex space-x-4 justify-content gap-5 items-center">
      <ul className="hidden md:flex space-x-12">
       {
           NavMenu.map((item) => (
            <motion.div
              whileHover={{ scale: 1.1 }} 
              transition={{   type: 'spring', stiffness: 300 }}
            > 
           <Link to={item.link} key={item.name} className="hover:text-secondary text-primaryText font-bold hover:underline hover:decoration-1 cursor-pointer">{item.name}</Link> 
           </motion.div>
          ))
       }
      </ul>
      <motion.div
              whileHover={{ scale: 1.1 }} 
              transition={{   type: 'spring', stiffness: 300 }}
            > 
<a href='#'
       className="hidden md:block hover:bg-primary  text-primaryText font-bold mx-4 px-3 pt-1 p-1 baseline rounded-full border-2 border-primary">
        <img className=""src={require('../assets/shopping-cart.png') } /></a>
        </motion.div>
        <motion.div
              whileHover={{ scale: 1.1 }} 
              transition={{   type: 'spring', stiffness: 300 }}
            >
       <Link to='/login' key="login" 
       className="hidden md:block hover:bg-secondary  text-primaryText font-bold px-12 pt-2 p-3 baseline rounded-full border-2 border-secondary">
        Login</Link>
        </motion.div>
        </div>
        

       <img onClick={() => setHamburger(!hamburger)} className="cursor-pointer h-8 md:hidden block " src={ hamburger ? "https://cdn-icons-png.flaticon.com/512/109/109602.png": "https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" } />

      {
         hamburger && (
          <div className="absolute flex flex-col md:hidden items-center self-end py-8 mt-[16rem]   font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50">
           <ul className="space-x-12">
            {
              NavMenu.map((item) => (
               <a href={item.link}>
                 <li key={item.name} className="hover:text-secondary text-primaryText hover:underline hover:decoration-1 cursor-pointer">{item.name}</li>
                </a>
              ))
            }
            </ul>
      </div>
         )
          } 
    </div>
  </nav>
  )
}