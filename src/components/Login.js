import { Link } from 'react-router-dom'

export function Login() {

  function submit(e) {
    e.PreventDefault()
  }

  return (
    <form onSubmit={submit}>
      <div className="w-full md:px-[20rem] flex flex-col lg:flex-row lg:justify-between  justify-center px-[1rem] mt-[2rem] md:mt-[5rem]"> 
        <div className="basis-30 flex flex-col items-center">
            <img className="w-full h-full" alt="" src={require('../assets/logo.png')}/> 
        </div>
        <div className="basis-50 flex flex-col items-center">
            <div className='p-5 w-full sm:w-[30rem] flex flex-col justify-around h-full'>
              <div className='p-4 bg-white'>
                <h1 className='mb-6 font-bold'>Login</h1>
                  <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-primaryText">Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="name@email.com" required />
                </div>
                <div class="mb-6">
                  <label for="password" class="block mb-2 text-sm font-medium text-primaryText">Password</label>
                  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Password" required/>
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                  </div>
                  <label for="remember" class="ms-2 text-sm font-medium  text-primaryText cursor-pointer hover:underline hover:decoration-1">Remember me</label>
                </div>
                <button type="submit" class="text-primaryText bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full   px-5 py-2.5 text-center  ">Login</button> 
              <div className='my-5'>
                <div className='flex flex-col justify-center items-center'>
                  <label for="remember" class="ms-2 text-sm font-medium cursor-pointer hover:underline hover:decoration-1 text-primaryText">Forgot Password?</label>
                </div> 
                <div className="flex my-5 items-center">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <div className="mx-4 text-gray-300 text-xs">OR</div>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                <div className='flex my-5 flex-col justify-center items-center'>
                  <label for="remember" class="ms-2 text-sm font-medium  text-gray-300">New to RiceUp ? <label className='text-secondary cursor-pointer hover:underline hover:decoration-1'><Link to="/signup">Sign Up</Link></label></label>
                </div> 
              </div> 
              </div> 
            </div> 
          </div>
        </div> 
    </form>
  )
}