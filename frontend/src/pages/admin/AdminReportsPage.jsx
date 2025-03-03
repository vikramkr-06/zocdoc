import { BarChart2, Filter, PieChart } from "lucide-react"

const AdminReportsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <div className="flex space-x-2">
          <select className="px-4 py-2 cursor-pointer bg-white border rounded-lg text-sm font-medium">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>This Year</option>
          </select>
          <button className="px-4 cursor-pointer py-2 bg-white border rounded-lg text-sm font-medium flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Appointments by Status</h2>
            <button className="text-sm text-primary hover:underline cursor-pointer">Export</button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <PieChart className="h-16 w-16 mx-auto text-gray-300" />
              <p className="text-gray-500 mt-2">Appointments by Status Chart</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Confirmed</div>
              <div className="text-lg font-semibold">45%</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Completed</div>
              <div className="text-lg font-semibold">30%</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Pending</div>
              <div className="text-lg font-semibold">15%</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Cancelled</div>
              <div className="text-lg font-semibold">10%</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Revenue Trends</h2>
            <button className="text-sm text-primary hover:underline cursor-pointer">Export</button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart2 className="h-16 w-16 mx-auto text-gray-300" />
              <p className="text-gray-500 mt-2">Revenue Trends Chart</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">This Month</div>
              <div className="text-lg font-semibold">$24,500</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Last Month</div>
              <div className="text-lg font-semibold">$22,300</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500">Growth</div>
              <div className="text-lg font-semibold text-green-600">+9.8%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Appointments by Specialty</h2>
            <button className="text-sm text-primary hover:underline cursor-pointer">Export</button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart2 className="h-16 w-16 mx-auto text-gray-300" />
              <p className="text-gray-500 mt-2">Appointments by Specialty Chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Patient Demographics</h2>
            <button className="text-sm text-primary hover:underline cursor-pointer">Export</button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <PieChart className="h-16 w-16 mx-auto text-gray-300" />
              <p className="text-gray-500 mt-2">Patient Demographics Chart</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Monthly Appointment Summary</h2>
          <button className="text-sm text-primary hover:underline cursor-pointer">Download Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Appointments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cancelled
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {["January", "February", "March", "April", "May", "June"].map((month, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{Math.floor(Math.random() * 500) + 500}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{Math.floor(Math.random() * 400) + 300}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{Math.floor(Math.random() * 50) + 20}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">${Math.floor(Math.random() * 10000) + 15000}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${index % 3 === 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                        }`}
                    >
                      {index % 3 === 0 ? "-" : "+"}
                      {Math.floor(Math.random() * 10) + 1}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminReportsPage