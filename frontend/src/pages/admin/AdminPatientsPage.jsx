import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"
import userImg from "../../assets/userProfileImage.avif"

const AdminPatientsPage = () => {
  const patients = [
    {
      id: "PAT-001",
      name: "John Smith",
      age: 45,
      gender: "Male",
      lastVisit: "2023-06-10",
      doctor: "Dr. Sarah Johnson",
      status: "Active",
    },
    {
      id: "PAT-002",
      name: "Emily Davis",
      age: 32,
      gender: "Female",
      lastVisit: "2023-06-08",
      doctor: "Dr. Michael Chen",
      status: "Active",
    },
    {
      id: "PAT-003",
      name: "Robert Wilson",
      age: 58,
      gender: "Male",
      lastVisit: "2023-06-05",
      doctor: "Dr. Priya Patel",
      status: "Active",
    },
    {
      id: "PAT-004",
      name: "Maria Garcia",
      age: 27,
      gender: "Female",
      lastVisit: "2023-06-01",
      doctor: "Dr. James Wilson",
      status: "Inactive",
    },
    {
      id: "PAT-005",
      name: "David Brown",
      age: 39,
      gender: "Male",
      lastVisit: "2023-05-28",
      doctor: "Dr. Lisa Thompson",
      status: "Active",
    },
    {
      id: "PAT-006",
      name: "Sarah Johnson",
      age: 52,
      gender: "Female",
      lastVisit: "2023-05-25",
      doctor: "Dr. Robert Lee",
      status: "Active",
    },
    {
      id: "PAT-007",
      name: "Michael Rodriguez",
      age: 41,
      gender: "Male",
      lastVisit: "2023-05-20",
      doctor: "Dr. Emily White",
      status: "Inactive",
    },
    {
      id: "PAT-008",
      name: "Jennifer Lee",
      age: 36,
      gender: "Female",
      lastVisit: "2023-05-18",
      doctor: "Dr. David Miller",
      status: "Active",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Patients Management</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium cursor-pointer">+ Add New Patient</button>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Filter by Status:</span>
            <div className="flex space-x-2">
              {["All", "Active", "Inactive"].map((status) => (
                <button key={status}
                  className={`px-3 py-1 cursor-pointer text-xs rounded-full ${status === "All" ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
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
                  Age/Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
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
              {patients.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{patient.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img
                          src={userImg}
                          alt={patient.name}
                          className="h-full w-full rounded-full border-2 object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{patient.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {patient.age} / {patient.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.lastVisit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{patient.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(patient.status)}`}>
                      {patient.status}
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
            <span className="font-medium">24</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer bg-primary text-white">1</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">2</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">3</button>
            <button className="px-3 py-1 border rounded-md text-sm cursor-pointer">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPatientsPage