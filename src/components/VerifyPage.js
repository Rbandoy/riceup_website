import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function VerifyPage() {
  const location = useLocation();
  const phone = location.state?.phone;

  function submit(e) {
    e.PreventDefault()
  }

  return (
    <form onSubmit={submit}>
      <div className="w-full md:px-[20rem] flex flex-col   justify-center px-[1rem] mt-[2rem] md:mt-[5rem]"> 
        <h2 className='font-bold text-center  mt-[5rem] text-3xl mt-8'>
                Sign Up
        </h2>

        <div className="basis-50 flex flex-col items-center">
            <div className='p-5 w-full sm:w-[30rem] flex flex-col justify-around h-full'>
              <div className='p-4 bg-white'>
                <h1 className='mb-6 font-bold'>Enter Verification Code</h1>
                  <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-primaryText">Your verification code is sent by SMS to: {phone}</label>
                  <input type="tel" autoComplete="off" id="otp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Enter OTP" required />
                </div>
                <div className='flex flex-col gap-4'>
                <button type="submit" class="text-primaryText bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full   px-5 py-2.5 text-center">Next</button> 
                <label class="text-primaryText bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full   px-5 py-2.5 text-center"><Link to="/signup">Cancel</Link></label>  
                </div>
              <div className='my-5'>
                 
                <div className="flex my-5 items-center">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <div className="mx-4 text-gray-300 text-xs">OR</div>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                <div className='flex my-5 flex-col justify-center items-center'>
                  <label for="remember" class="ms-2 text-sm font-medium  text-gray-300">Already have an account ? <label className='text-secondary cursor-pointer hover:underline hover:decoration-1'><Link to="/login">Login</Link></label></label>
                </div> 
              </div> 
              </div> 
            </div> 
          </div>
        </div> 
    </form>
  )
}