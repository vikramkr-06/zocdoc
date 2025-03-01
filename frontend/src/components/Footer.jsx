import React from 'react'
import { Link } from 'react-router-dom'
import wrong from '../assets/wrong.png'
import googleBanner from '../assets/google-banner.png'
import appleBanner from '../assets/apple-banner.png'


const Footer = () => {
  return (
    <div className='bg-[#333333] max-w-screen flex flex-col'>
      <div className="px-16">
        <div className="flex justify-between text-white py-10">
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg font-medium mb-5">Zocdoc</h1>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Home</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>About us</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Press</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Careers</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Contact us</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Help</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg font-medium mb-5">Discover</h1>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>The Paper Gown: Stories for and about patients</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Practice Resources for providers</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Community Standards</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Data and privacy</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Verified reviews</Link>
          </div>
          <div className="">
            <h1 className="text-lg font-medium underline">Insurance Carriers</h1>
          </div>
          <div className="">
            <h1 className="text-lg font-medium underline">Top Specialties</h1>
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg font-medium mb-5">Are you a top doctor or health service?</h1>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>List your practice on Zocdoc</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Learn about Zocdoc for Health Systems</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Become an EHR partner</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Access Zocdoc for Developers</Link>
            <Link to='#' className='text-gray-300 font-semibold hover:text-white transition-colors'>Learn about Zocdoc Enterprise Solutions</Link>
            <div className="mt-5">
              <h1 className="text-lg font-medium mb-2">Get the Zocdoc app</h1>
              <img src={appleBanner} alt="google" className='h-10 cursor-pointer' />
              <img src={googleBanner} alt="Google" className='h-10 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className="text-[13.5px] py-7 text-gray-300">
          <p>The content provided here and elsewhere on the Zocdoc site or mobile app is provided for general informational purposes only. It is not intended as, and Zocdoc does not provide, medical advice, diagnosis or treatment. Always contact your healthcare provider directly with any questions you may have regarding your health or specific medical advice.</p>
        </div>
      </div>
      <div className="bg-zinc-950 text-white flex items-center justify-between px-16 py-7">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ZocDoc Inc. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white text-sm">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer