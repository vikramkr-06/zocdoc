import { useState } from "react"
import { Menu, X, BarChart, Users, Settings, Shield, Search, Bell } from "lucide-react"
import {Link} from "react-router-dom"
import adminLogo from "../assets/adminProfileLogo.avif"

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/admin" className="flex-shrink-0">
              <Shield className="h-8 w-8 text-yellow-500" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition flex items-center"
                >
                  <BarChart className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
                <Link
                  to="/admin/users"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition flex items-center"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Users
                </Link>
                <Link
                  to="/admin/doctors"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition flex items-center"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Doctors
                </Link>
                <Link
                  to="/admin/settings"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition flex items-center"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="relative md:hidden">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="bg-gray-700 text-white placeholder-gray-400 block w-full pl-10 pr-3 py-2 rounded-md text-sm leading-5 focus:outline-none focus:bg-gray-600 transition duration-150 ease-in-out"
                  placeholder="Search..."
                  type="search"
                />
              </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="bg-gray-700 text-white placeholder-gray-400 block w-full pl-10 pr-3 py-2 rounded-md text-sm leading-5 focus:outline-none focus:bg-gray-600 transition duration-150 ease-in-out"
                  placeholder="Search..."
                  type="search"
                />
              </div>
              <button className="ml-3 cursor-pointer p-1 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative group">
                <div>
                  <button className="max-w-xs cursor-pointer bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition">
                    <img className="h-12 w-12 rounded-full" src={adminLogo} alt="Admin" />
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition">
                  <Link to="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link to="/admin/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link to="/admin/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition"
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
            <Link
              to="/admin/dashboard"
              className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition flex items-center"
            >
              <BarChart className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition flex items-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Users
            </Link>
            <Link
              to="/admin/doctors"
              className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition flex items-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Doctors
            </Link>
            <Link
              to="/admin/settings"
              className="px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition flex items-center"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={adminLogo} alt="Admin" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Admin Mr. Vikram</div>
                <div className="text-sm font-medium leading-none text-gray-400">vikram@gmail.com</div>
              </div>
              <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/admin/profile"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition"
              >
                Your Profile
              </Link>
              <Link
                to="/admin/settings"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition"
              >
                Settings
              </Link>
              <Link
                href="/admin/logout"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition"
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

export default AdminNavbar