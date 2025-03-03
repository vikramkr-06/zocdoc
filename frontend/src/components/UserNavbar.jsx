import React, { useState } from "react"
import { Menu, X, Bell, Search } from "lucide-react"
import { Link } from "react-router-dom"
import userLogo from "../assets/userProfileImage.avif"

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 border-2 rounded-full">
              <img className="h-10 w-10 rounded-full" src={userLogo} alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/appointments"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                >
                  Appointments
                </Link>
                <Link
                  to="/user/doctor/page"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                >
                  Find Doctors
                </Link>
                <Link
                  to="/health-records"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                >
                  Health Records
                </Link>
              </div>
            </div>
          </div>
          <div className="relative border-2 rounded-lg md:hidden">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 rounded-md text-sm leading-5 focus:outline-none transition duration-150 ease-in-out"
                  placeholder="Search..."
                  type="search"
                />
              </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative border-2 rounded-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 rounded-md text-sm leading-5 focus:outline-none transition duration-150 ease-in-out"
                  placeholder="Search..."
                  type="search"
                />
              </div>
              <button className="ml-3 p-1 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative group">
                <div>
                  <button className="max-w-xs cursor-pointer border-2 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition">
                    <img className="h-10 w-10 rounded-full" src={userLogo} alt="User" />
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition">
                  <Link to="/user/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link
              href="/appointments"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Appointments
            </Link>
            <Link
              href="/doctors"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Find Doctors
            </Link>
            <Link
              href="/health-records"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Health Records
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0 border-2 rounded-full">
                <img className="h-10 w-10 rounded-full" src={userLogo} alt="User" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-gray-500">tom@example.com</div>
              </div>
              <button className="ml-auto bg-gray-500 flex-shrink-0 p-1 rounded-full text-white">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                href="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default UserNavbar