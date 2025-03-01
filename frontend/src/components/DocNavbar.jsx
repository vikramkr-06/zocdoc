import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const DocNavbar = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-screen flex items-center justify-between px-5 py-4 sm:px-10 md:px-16 border-b border-gray-400'>
      <div className="flex items-center gap-3">
        <img onClick={() => navigate('/')} src={logo} alt="zocdoc" className='h-12 cursor-pointer' />
        <h1 className="text-xl font-[400] text-gray-800">for Providers</h1>
      </div>
      <div className="flex gap-5 relative">
        <span className='hover:bg-gray-100 px-6 py-3 rounded-lg cursor-pointer text-[18px] font-[400] ml-5'>Find care</span>
        <span className='border-r border-gray-300 h-7 absolute left-[35%] top-3'></span>
        <span className='hover:bg-gray-100 px-6 py-3 rounded-lg cursor-pointer text-[18px] font-[400]'>Sign up</span>
        <button className='hover:bg-gray-100 px-5 py-0 cursor-pointer rounded-lg border'>Need help?</button>
      </div>
    </div>
  )
}

export default DocNavbar