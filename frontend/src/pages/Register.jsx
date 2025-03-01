import React from 'react'
import AuthNavbar from '../components/AuthNavbar'
import { Link } from 'react-router-dom'
import googleLogo from '../assets/google-logo.png'
import appleLogo from '../assets/apple-logo.png'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div className='w-full max-w-screen min-h-screen'>
      <AuthNavbar />
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto mb-42">
        <form className="py-10 px-5 space-y-3">
          <h1 className="text-4xl">Create an account</h1>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className='pl-3 text-lg'>Email</label>
            <input type="text" className='w-full border-2 px-7 py-3 rounded-lg border-gray-200 focus:outline-0 focus:ring-0' />
          </div>
          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <label htmlFor="" className='pl-3 text-lg'>Legal first name</label>
              <input type="text" className='w-full border-2 px-7 py-3 rounded-lg border-gray-200 focus:outline-0 focus:ring-0' />
            </div>
            <div className="w-1/2">
              <label htmlFor="" className='pl-3 text-lg'>Legal last name</label>
              <input type="text" className='w-full border-2 px-7 py-3 rounded-lg border-gray-200 focus:outline-0 focus:ring-0' />
            </div>
          </div>
          <div className="">
            <label htmlFor="" className='pl-3 text-lg'>Date of birth</label>
            <input type="date" placeholder='mm/dd/yyyy' className='text-gray-500 w-full border-2 px-7 py-3 rounded-lg border-gray-200 focus:outline-0 focus:ring-0' />
          </div>
          <div className="">
            <span className="font-medium pl-3">SEX</span>
            <div className="flex gap-2 items-center pl-3">
              <input type="radio" className='w-4 h-4' />
              <span>Male</span>
            </div>
            <div className="flex gap-2 items-center pl-3">
              <input type="radio" className='w-4 h-4' />
              <span>Female</span>
            </div>
          </div>
          <div className="text-lg pl-3">
            <Link to='#' className='underline hover:text-blue-500'>Add more sex & gender info</Link>
            <span className='pl-1'>(optional)</span>
          </div>
          <button type='submit' className='w-full text-center py-3 bg-[#FFF04B] rounded-lg text-md cursor-pointer mt-5 font-medium text-gray-600'>Continue</button>
        </form>
        <div className="flex items-center w-full justify-between px-7">
          <hr className="flex-grow border-t-2 border-gray-400" />
          <span className="mx-4 text-lg text-gray-500">or</span>
          <hr className="flex-grow border-t-2 border-gray-400" />
        </div>
        <div className="px-7 w-full space-y-5 mt-5">
          <button className='flex items-center justify-center hover:bg-gray-100 cursor-pointer border border-gray-300 w-full rounded-lg relative py-3'>
            <img src={googleLogo} alt="Google" className='w-8 absolute left-2 top-2' />
            <span className="font-medium text-gray-500 text-md">Continue with Google</span>
          </button>
          <button className='flex items-center justify-center hover:bg-gray-100 cursor-pointer border border-gray-300 w-full rounded-lg relative py-3'>
            <img src={appleLogo} alt="Apple" className='w-8 absolute left-2 top-2' />
            <span className="font-medium text-gray-500 text-md">Continue with Apple</span>
          </button>
          <p className="text-center font-medium text-gray-700">Already have an account?
            <Link to='#' className='underline pl-2 hover:text-blue-500'>Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register