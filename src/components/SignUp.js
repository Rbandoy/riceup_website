import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { OtpService } from './services/Otp';

export function SignUp() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("")
  const [sendingCode, setSendingCode] = useState(false)

  function submit(e) {
    e.preventDefault(); 
    if (sendingCode === false) {
      sendCode()
    } 
  }

  async function sendCode() {
    setSendingCode(true)
    const response = await OtpService.sendVerification(phone)
    console.log(response)
    if (response.is_success === false) {
      setSendingCode(false)
      alert(response.message)
      return
    } else {
      setSendingCode(false)
      navigate('verify', { state: { phone } });
    }
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
                <h1 className='mb-6 font-bold'>Sign Up</h1>
                  <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-primaryText">Phone Number </label>
                  <input autoComplete="off" type="tel" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Enter phone number"
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                  required />
                </div>

                <button disabled={sendingCode} type="submit" class="text-primaryText bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full   px-5 py-2.5 text-center  ">Next</button> 
                
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