import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const AuthNavbar = () => {
  const navigate = useNavigate()
  return (
    <div className='max-w-screen flex items-center justify-start px-5 py-5 sm:px-10 md:px-16'>
      <img onClick={() => navigate('/')} src={logo} alt="zocdoc" className='h-14 cursor-pointer' />
    </div>
  )
}

export default AuthNavbar