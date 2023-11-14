export function Footer() {
  return (
    <footer className="bg-lighter"> 
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
              <a href='' className='hover:text-secondary'>Home</a>
              <a href='#featured' className='hover:text-secondary'>Products</a>
              <a href='#about' className='hover:text-secondary'>About</a> 
            </div> 
            <div className='flex flex-col mx-4 space-y-3'>
              <a href='' className='hover:text-secondary'>Privacy And Policy</a>
              <a href='#featured' className='hover:text-secondary'>Email: andoyonlinestore@gmail.com</a>
              <a href='#about' className='hover:text-secondary'>About</a> 
            </div> 
        </div>
      </div> 
    </footer>
  )
}