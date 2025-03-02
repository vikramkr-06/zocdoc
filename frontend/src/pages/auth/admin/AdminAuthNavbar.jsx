import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ShieldAlert, Home, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                <ShieldAlert className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-purple-600">MediBook</span>
              <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Admin</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/admin/portal" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Admin Portal
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link to="/admin/login">
              <Button className="bg-purple-600 hover:bg-purple-700">Admin Login</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:bg-purple-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Home
              </div>
            </Link>
            <Link
              to="/admin/portal"
              className="text-gray-700 hover:bg-purple-50 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                Admin Portal
              </div>
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <ShieldAlert className="h-10 w-10 rounded-full bg-purple-100 p-2 text-purple-600" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Admin Portal</div>
                <div className="text-sm font-medium text-gray-500">Restricted access</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/admin/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default AdminNavbar