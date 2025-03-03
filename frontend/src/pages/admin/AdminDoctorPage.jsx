import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"
import docImg from "../../assets/doc.jpg"

const AdminDoctorPage = () => {
  const doctors = [
    {
      id: "DOC-001",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      patients: 145,
      appointments: 32,
      status: "Active",
    },
    {
      id: "DOC-002",
      name: "Dr. Michael Chen",
      specialty: "Pediatrics",
      patients: 132,
      appointments: 28,
      status: "Active",
    },
    {
      id: "DOC-003",
      name: "Dr. Vikram Kumar",
      specialty: "Pediatrics",
      patients: 132, 
      appointments: 28, 
      status: "Active"
    },
    {
      id: "DOC-004",
      name: "Dr. Priya Patel",
      specialty: "Dermatology",
      patients: 118,
      appointments: 25,
      status: "Active",
    },
    {
      id: "DOC-005",
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      patients: 105,
      appointments: 22,
      status: "Active",
    },
    {
      id: "DOC-006",
      name: "Dr. Lisa Thompson",
      specialty: "Neurology",
      patients: 98,
      appointments: 20,
      status: "On Leave",
    },
    {
      id: "DOC-007",
      name: "Dr. Robert Lee",
      specialty: "Ophthalmology",
      patients: 87,
      appointments: 18,
      status: "Active",
    },
    {
      id: "DOC-008",
      name: "Dr. Emily White",
      specialty: "Gynecology",
      patients: 76,
      appointments: 16,
      status: "Active",
    },
    {
      id: "DOC-009",
      name: "Dr. David Miller",
      specialty: "Psychiatry",
      patients: 65,
      appointments: 14,
      status: "Inactive",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "On Leave":
        return "bg-yellow-100 text-yellow-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Doctors Management</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium cursor-pointer">+ Add New Doctor</button>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Filter by Status:</span>
            <div className="flex space-x-2">
              {["All", "Active", "On Leave", "Inactive"].map((status) => (
                <button key={status}
                  className={`px-3 cursor-pointer py-1 text-xs rounded-full ${status === "All" ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors..."
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
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patients
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Appointments
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
              {doctors.map((doctor, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{doctor.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img
                          src={docImg}
                          alt={doctor.name}
                          className="h-full border-2 rounded-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{doctor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{doctor.specialty}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{doctor.patients}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{doctor.appointments}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(doctor.status)}`}>
                      {doctor.status}
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
            <span className="font-medium">15</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer bg-primary text-white">1</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">2</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDoctorPage