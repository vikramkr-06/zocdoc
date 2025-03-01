import React from 'react'
import AuthNavbar from '../components/AuthNavbar'
import { Link } from 'react-router-dom'
import googleLogo from '../assets/google-logo.png'

const Login = () => {
  return (
    <div>
      <AuthNavbar />
      <div className="">
        <form className="">
          <h1 className="">Create an account</h1>
          <div className="">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="">
            <label htmlFor="">Legal first name</label>
            <input type="text" />
            <label htmlFor="">Legal last name</label>
            <input type="text" />
          </div>
          <div className="">
            <label htmlFor="">Date of birth</label>
            <input type="text" placeholder='mm/dd/yyyy' />
          </div>
          <div className="">
            <span className="">SEX</span>

          </div>
          <div className="">
            <Link to='#'>Add more sex & gender info</Link>
            <span className=''>(optional)</span>
          </div>
          <button type='submit'>Continue</button>
        </form>
        <div className=''>
          <hr />
          or
          <hr />
        </div>
        <button className=''>
          <img src={googleLogo} alt="Google" />
          <span className="">Continue with Google</span>
        </button>
        <button className=''>
          <img src={googleLogo} alt="Google" />
          <span className="">Continue with Apple</span>
        </button>
        <p className="">Already have an account?
          <Link>Log in</Link></p>
      </div>
    </div>
  )
}

export default Login