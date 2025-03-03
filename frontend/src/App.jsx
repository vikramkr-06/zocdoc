import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import DoctorOwnProfile from './pages/DoctorProfile'
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
import DoctorNavbar from './components/DoctorNavbar'
import DoctorPage from './pages/user/DoctorPage'
import DoctorProfile from './pages/user/DoctorProfile'
import BookAppointment from './pages/user/DoctorBook'
import Footer from './components/Footer'
import DoctorHomePage from './pages/Doctor/DoctorHomePage'
import AdminHomePage from './pages/admin/AdminHomePage'

const App = () => {
  const location = useLocation();
  const userNavbarRoutes = [
    "/login", 
    "/register",
    "/forgot/password",
    "/verify/otp",
    "/update/password",
    "/",
    "/user/profile",
    "/user/doctor/page",
    "/user/doctor/page/:id",
    "/user/doctor/page/:id/book"
  ];
  const doctorNavbarRoutes = [
    "/doctor/login",
    "/doctor/register",
    "/doctor/forgot/password",
    "/doctor/verify/otp",
    "/doctor/update/password",
    "/doctor",
    "/doctor/profile"
  ];
  const userFooterRoutes = [
    "/",
    "/user/profile",
    "/user/doctor/page",
    "/user/doctor/page/:id",
    "/user/doctor/page/:id/book",
    "/doctor"
  ];

  return (
    <div>
      {userNavbarRoutes.includes(location.pathname) && <UserNavbar />}
      {doctorNavbarRoutes.includes(location.pathname) && <DoctorNavbar />}

      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot/password" element={<UserForgotPassword />} />
        <Route path="/verify/otp" element={<UserVerifyOTP />} />
        <Route path="/update/password" element={<UserUpdatePassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/user/profile' element={<UserProfile />} />

        <Route path='/user/doctor/page' element={<DoctorPage />} />
        <Route path='/user/doctor/page/:id' element={<DoctorProfile />} />
        <Route path='/user/doctor/page/:id/book' element={<BookAppointment />} />

        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/doctor/forgot/password" element={<DoctorForgotPassword />} />
        <Route path="/doctor/verify/otp" element={<DoctorVerifyOTP />} />
        <Route path="/doctor/update/password" element={<DoctorUpdatePassword />} />
        <Route path='/doctor' element={<DoctorHomePage />} />
        <Route path='/doctor/profile' element={<DoctorOwnProfile />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot/password" element={<AdminForgotPassword />} />
        <Route path='/admin' element={<AdminHomePage />} />
      </Routes>

      {userFooterRoutes.includes(location.pathname) && <Footer />}
      <Toaster />
    </div>
  )
}

export default App;
