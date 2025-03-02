import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import DoctorProfile from './pages/DoctorProfile'
import UserProfile from './pages/UserProfile'

import { Toaster } from "@/components/ui/toaster"
import UserLogin from './pages/auth/user/Login'
import UserRegister from './pages/auth/user/Register'
import UserForgotPassword from './pages/auth/user/ForgotPassword'
import UserUpdatePassword from './pages/auth/user/UpdatePassword'
import UserVerifyOTP from './pages/auth/user/VerifyOTp'
import DoctorForgotPassword from './pages/auth/doctor/ForgotPasswOrd'
import DoctorLogin from './pages/auth/doctor/Login'
import DoctorRegister from './pages/auth/doctor/Register'
import DoctorVerifyOTP from './pages/auth/doctor/VerifyOTP'
import DoctorUpdatePassword from './pages/auth/doctor/UpdatePassword'
import AdminLogin from './pages/auth/admin/Login'
import AdminForgotPassword from './pages/auth/admin/ForgotPassword'
import UserNavbar from './components/UserNavbar'
import AdminNavbar from './components/AdminNavbar'
import DoctorNavbar from './components/DoctorNavbar'

const App = () => {
  const location = useLocation();
  const userNavbarRoutes = ["/login", "/register", "/forgot/password", "/verify/otp", "/update/password", "/", "/user/profile"];
  const doctorNavbarRoutes = ["/doctor/login", "/doctor/register", "/doctor/forgot/password", "/doctor/verify/otp", "/doctor/update/password", "/doctor", "/doctor/profile"];
  const adminNavbarRoutes = ["/admin/login", "/admin/forgot/password", "/admin"];
  return (
    <div>
      {userNavbarRoutes.includes(location.pathname) && <UserNavbar />}
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot/password" element={<UserForgotPassword />} />
        <Route path="/verify/otp" element={<UserVerifyOTP />} />
        <Route path="/update/password" element={<UserUpdatePassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/user/profile' element={<UserProfile />} />
      </Routes>
      {doctorNavbarRoutes.includes(location.pathname) && <DoctorNavbar />}
      <Routes>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/doctor/forgot/password" element={<DoctorForgotPassword />} />
        <Route path="/doctor/verify/otp" element={<DoctorVerifyOTP />} />
        <Route path="/doctor/update/password" element={<DoctorUpdatePassword />} />
        <Route path='/doctor' element={<Home />} />
        <Route path='/doctor/profile' element={<DoctorProfile />} />
      </Routes>
      {adminNavbarRoutes.includes(location.pathname) && <AdminNavbar />}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot/password" element={<AdminForgotPassword />} />
        <Route path='/admin' element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App