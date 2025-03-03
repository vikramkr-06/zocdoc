import { useState } from "react"
import { Users, Calendar, User, Settings, Bell, Search, Menu, X, BarChart2, TrendingUp, Clock, LogOut, Home, Edit, Trash2, Filter, } from "lucide-react"
import adminLogo from "../../assets/adminProfileLogo.avif"
import AdminAppointmentPage from "./AdminAppointmentsPage"
import AdminDoctorPage from "./AdminDoctorPage"
import AdminPatientsPage from "./AdminPAtientsPage"
import AdminReportsPage from "./AdminReportsPage"
import AdminSettingPage from "./AdminSettingPage"
const AdminHomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const stats = [
    {
      title: "Total Appointments",
      value: "1,248",
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      change: "+12.5%",
    },
    { title: "Total Doctors", value: "64", icon: <User className="h-8 w-8 text-green-500" />, change: "+4.3%" },
    { title: "Total Patients", value: "2,845", icon: <Users className="h-8 w-8 text-purple-500" />, change: "+18.2%" },
    { title: "Avg. Wait Time", value: "14 min", icon: <Clock className="h-8 w-8 text-orange-500" />, change: "-2.4%" },
  ]

  const recentAppointments = [
    {
      id: "AP-2023-1001",
      patient: "John Smith",
      doctor: "Dr. Sarah Johnson",
      date: "2023-06-15",
      time: "09:30 AM",
      status: "Completed",
    },
    {
      id: "AP-2023-1002",
      patient: "Emily Davis",
      doctor: "Dr. Michael Chen",
      date: "2023-06-15",
      time: "10:45 AM",
      status: "Cancelled",
    },
    {
      id: "AP-2023-1003",
      patient: "Robert Wilson",
      doctor: "Dr. Priya Patel",
      date: "2023-06-15",
      time: "01:15 PM",
      status: "Confirmed",
    },
    {
      id: "AP-2023-1004",
      patient: "Maria Garcia",
      doctor: "Dr. James Wilson",
      date: "2023-06-16",
      time: "11:00 AM",
      status: "Pending",
    },
    {
      id: "AP-2023-1005",
      patient: "David Brown",
      doctor: "Dr. Lisa Thompson",
      date: "2023-06-16",
      time: "03:30 PM",
      status: "Confirmed",
    },
  ]

  const topDoctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiology", appointments: 145, rating: 4.9 },
    { name: "Dr. Michael Chen", specialty: "Pediatrics", appointments: 132, rating: 4.8 },
    { name: "Dr. Priya Patel", specialty: "Dermatology", appointments: 118, rating: 4.7 },
    { name: "Dr. James Wilson", specialty: "Orthopedics", appointments: 105, rating: 4.9 },
  ]

  const notifications = [
    { id: 1, message: "New appointment request from John Smith", time: "5 minutes ago", read: false },
    { id: 2, message: "Dr. Sarah Johnson updated her availability", time: "1 hour ago", read: false },
    { id: 3, message: "System maintenance scheduled for tonight at 2 AM", time: "3 hours ago", read: true },
    { id: 4, message: "New patient registration: Emily Davis", time: "Yesterday", read: true },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Confirmed":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:translate-y-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center">
            <span className="text-primary text-xl font-bold">MediConnect</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 py-6">
          <div className="flex flex-col items-center mb-6">
            <div className="h-20 w-20 rounded-full cursor-pointer bg-gray-200 mb-2 overflow-hidden">
              <img src={adminLogo} alt="Admin profile" className="h-full w-full border-2 rounded-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold">Vikram Kumar</h3>
            <p className="text-sm text-gray-500">System Administrator</p>
          </div>
          <nav className="space-y-1">
            <button onClick={() => setActiveTab("dashboard")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "dashboard" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <Home className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </button>
            <button onClick={() => setActiveTab("appointments")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "appointments" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <Calendar className="h-5 w-5 mr-3" />
              <span>Appointments</span>
            </button>
            <button onClick={() => setActiveTab("doctors")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "doctors" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <User className="h-5 w-5 mr-3" />
              <span>Doctors</span>
            </button>
            <button onClick={() => setActiveTab("patients")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "patients" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <Users className="h-5 w-5 mr-3" />
              <span>Patients</span>
            </button>
            <button onClick={() => setActiveTab("reports")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "reports" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <BarChart2 className="h-5 w-5 mr-3" />
              <span>Reports</span>
            </button>
            <button onClick={() => setActiveTab("settings")}
              className={`flex cursor-pointer items-center w-full px-4 py-3 text-left rounded-lg ${activeTab === "settings" ? "bg-primary text-white" : "hover:bg-gray-100"}`}>
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex cursor-pointer items-center justify-center w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="lg:hidden mr-4">
              <Menu className="h-6 w-6" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="relative p-2 cursor-pointer rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications.filter((n) => !n.read).length}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border hidden">
                <div className="p-3 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b hover:bg-gray-50 ${!notification.read ? "bg-blue-50" : ""}`}
                    >
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-sm text-primary hover:underline">View All Notifications</button>
                </div>
              </div>
            </div>
            <div className="h-10 w-10 cursor-pointer rounded-full bg-gray-200 overflow-hidden" onClick={() => setActiveTab("settings")}>
              <img 
                src={adminLogo}
                alt="Admin profile"
                className="h-full w-full border-2 rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "dashboard" && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 cursor-pointer bg-white border rounded-lg text-sm font-medium flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <select className="px-4 py-2 bg-white cursor-pointer border rounded-lg text-sm font-medium">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white cursor-pointer rounded-lg shadow p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        <span
                          className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {stat.change} from last month
                        </span>
                      </div>
                      <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Appointments Overview</h2>
                    <select className="text-sm cursor-pointer border rounded-md px-2 py-1">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 mx-auto text-gray-300" />
                      <p className="text-gray-500 mt-2">Appointments Chart</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Revenue Statistics</h2>
                    <select className="text-sm border cursor-pointer rounded-md px-2 py-1">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                  </div>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 mx-auto text-gray-300" />
                      <p className="text-gray-500 mt-2">Revenue Chart</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow mb-6">
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-lg font-semibold">Recent Appointments</h2>
                  <button className="text-primary text-sm cursor-pointer hover:underline" onClick={() => setActiveTab("appointments")}>View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentAppointments.map((appointment, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{appointment.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{appointment.patient}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{appointment.doctor}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {appointment.date} <br />
                            <span className="text-gray-500">{appointment.time}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 cursor-pointer hover:text-blue-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 cursor-pointer hover:text-red-900">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-lg font-semibold">Top Performing Doctors</h2>
                  <button className="text-primary text-sm cursor-pointer hover:underline" onClick={() => setActiveTab("doctors")}>View All</button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {topDoctors.map((doctor, index) => (
                    <div key={index} className="border cursor-pointer rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                          <img
                            src={adminLogo}
                            alt={doctor.name}
                            className="h-full border-2 rounded-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{doctor.name}</h3>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <p className="text-gray-500">Appointments</p>
                          <p className="font-medium">{doctor.appointments}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Rating</p>
                          <p className="font-medium">{doctor.rating}/5</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "appointments" && <AdminAppointmentPage />}
          {activeTab === "doctors" && <AdminDoctorPage />}
          {activeTab === "patients" && <AdminPatientsPage />}
          {activeTab === "reports" && <AdminReportsPage />}
          {activeTab === "settings" && <AdminSettingPage />}
        </main>
      </div>
    </div>
  )
}

export default AdminHomePage