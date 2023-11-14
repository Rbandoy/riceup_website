import { useState } from 'react'

const NavMenu = [
  {name: "Home", link: "#"},
  {name: "About Us", link: "#about"},
  {name: "Features", link: "#features"}
]

export function NavBar() {

  const [hamburger, setHamburger] = useState(false)

  return (
    <nav className=" relative top-0 left-0   w-full p-4 text-secondary relative mx-auto p-2">
      <div className="flex items-center justify-between">
        <div className='pt-2 mx-[4rem]'>
          <img className="w-20 h-auto" alt="" src={require('../assets/logo.png')}/> 
        </div> 
      
        <div className='flex items-center justify-between'>
        <ul className="hidden md:flex space-x-12">
          {
            NavMenu.map((item) => (
              <a href={item.link}>
                <li key={item.name} className="hover:text-secondary text-primaryText hover:underline hover:decoration-1 cursor-pointer">{item.name}</li>
              </a>
            ))
          }
        </ul>
        <a href='#'
        className="hidden md:block hover:bg-secondary bg-buttonColor text-primaryText font-bold mx-4 px-6 pt-2 p-3 baseline rounded-full">
          Login</a>
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