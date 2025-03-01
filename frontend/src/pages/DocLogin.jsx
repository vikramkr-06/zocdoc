import React from 'react'
import DocNavbar from '../components/DocNavbar'
import Footer from '../components/Footer'

const DocLogin = () => {
  return (
    <div className='w-full max-w-screen min-h-screen'>
      <DocNavbar />
      <div className="flex flex-col items-center justify-center max-w-xl mx-auto mb-10">
        <form className="py-10 px-5 space-y-3">
          <h1 className="text-3xl">To log in, enter your email address</h1>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className='pl-3 text-lg'>Email Address</label>
            <input type="text" className='w-full border-2 px-7 py-3 rounded-lg border-gray-200 focus:outline-0 focus:ring-0' />
          </div>
          <button type='submit' className='w-full text-center py-3 bg-[#FFF04B] rounded-lg text-md cursor-pointer mt-5 font-medium text-gray-600'>Continue</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default DocLogin