import { useState } from "react"
import { Menu, X, Calendar, Users, Clipboard, MessageSquare, Bell } from "lucide-react"
import { Link } from "react-router-dom"
import doctorLogo from "../assets/DoctorProfileLogo.avif"

const DoctorNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/doctor" className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100">
              <Clipboard className="h-8 w-8" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/doctor/appointments" className="px-3 py-2 hover:bg-gray-100 rounded-md text-sm font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Appointments
                </Link>
                <Link to="/doctor/patients" className="px-3 py-2 hover:bg-gray-100 rounded-md text-sm font-medium flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Patients
                </Link>
                <Link to="/doctor/consultations" className="px-3 py-2 hover:bg-gray-100 rounded-md text-sm font-medium flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Consultations
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-3 cursor-pointer rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white transition">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-6 relative group">
                <div>
                  <button className="max-w-xs cursor-pointer rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white transition">
                    <img className="h-12 w-12 rounded-full" src={doctorLogo} alt="Doctor" />
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible transition">
                  <Link to="/doctor/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link to="/doctor/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link to="/doctor/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white transition">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (<X className="block h-6 w-6" aria-hidden="true" />) 
              : (<Menu className="block h-6 w-6" aria-hidden="true" />)}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/doctor/appointments" className="px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Appointments
            </Link>
            <Link to="/doctor/patients" className="px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Patients
            </Link>
            <Link to="/doctor/consultations" className="px-3 py-2 rounded-md text-base font-medium flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Consultations
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-teal-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={doctorLogo} alt="Doctor" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none">Dr. Vikram Kumar</div>
                <div className="text-sm font-medium leading-none text-gray-500">vikram@gmail.com</div>
              </div>
              <button className="ml-auto flex-shrink-0 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white transition">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link to="/doctor/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition">
                Your Profile
              </Link>
              <Link to="/doctor/settings" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition">
                Settings
              </Link>
              <Link to="/doctor/logout" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default DoctorNavbar