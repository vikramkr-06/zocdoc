import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"
import { useState } from "react"

const AdminAppointmentPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("All")

  const appointments = [
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
    {
      id: "AP-2023-1006",
      patient: "Sarah Johnson",
      doctor: "Dr. Robert Lee",
      date: "2023-06-17",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: "AP-2023-1007",
      patient: "Michael Rodriguez",
      doctor: "Dr. Emily White",
      date: "2023-06-17",
      time: "02:30 PM",
      status: "Pending",
    },
    {
      id: "AP-2023-1008",
      patient: "Jennifer Lee",
      doctor: "Dr. David Miller",
      date: "2023-06-18",
      time: "09:15 AM",
      status: "Completed",
    },
    {
      id: "AP-2023-1009",
      patient: "William Taylor",
      doctor: "Dr. Jessica Brown",
      date: "2023-06-18",
      time: "11:45 AM",
      status: "Cancelled",
    },
    {
      id: "AP-2023-1010",
      patient: "Elizabeth Martin",
      doctor: "Dr. Thomas Anderson",
      date: "2023-06-19",
      time: "01:00 PM",
      status: "Confirmed",
    },
  ]

  const filteredAppointments = selectedStatus === "All" ? appointments : appointments.filter((app) => app.status === selectedStatus)

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
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Appointments Management</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium cursor-pointer">+ New Appointment</button>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Filter by Status:</span>
            <div className="flex space-x-2">
              {["All", "Confirmed", "Pending", "Completed", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1 text-xs rounded-full ${selectedStatus === status ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
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
              {filteredAppointments.map((appointment, index) => (
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
                      <button className="text-gray-600 cursor-pointer hover:text-gray-900">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 cursor-pointer">Previous</button>
            <button className="px-3 py-1 border rounded-md text-sm bg-primary text-white cursor-pointer">1</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">2</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAppointmentPage