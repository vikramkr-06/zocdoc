import adminImage from "../../assets/adminProfileLogo.avif"

const AdminSettingPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Profile Settings</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full cursor-pointer bg-gray-200 mb-4 overflow-hidden">
                  <img
                    src={adminImage}
                    alt="Admin profile"
                    className="h-full w-full border-2 rounded-full object-cover"
                  />
                </div>
                <button className="px-4 py-2 bg-primary cursor-pointer text-white rounded-lg text-sm font-medium">Change Photo</button>
              </div>
            </div>
            <div className="md:w-2/3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" defaultValue="Admin" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" defaultValue="User" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" defaultValue="admin@mediconnect.com" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input type="text" id="role" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" defaultValue="System Administrator" disabled />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-4 cursor-pointer py-2 bg-primary text-white rounded-lg text-sm font-medium">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Security Settings</h2>
        </div>
        <div className="p-6">
          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1"> Current Password</label>
                <input type="password" id="currentPassword" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Enter your current password" />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1"> New Password</label>
                <input type="password" id="newPassword" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Enter new password" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1"> Confirm New Password</label>
                <input type="password" id="confirmPassword" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" placeholder="Confirm new password" />
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 cursor-pointer bg-primary text-white rounded-lg text-sm font-medium">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Notification Settings</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive email notifications for important updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">SMS Notifications</h3>
                <p className="text-sm text-gray-500">Receive text messages for urgent updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Browser Notifications</h3>
                <p className="text-sm text-gray-500">Show desktop notifications when browser is open</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">System Maintenance Alerts</h3>
                <p className="text-sm text-gray-500">Get notified about system maintenance and updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-primary text-white rounded-lg cursor-pointer text-sm font-medium">Save Preferences</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">System Settings</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="systemName" className="block text-sm font-medium text-gray-700 mb-1">
                  System Name
                </label>
                <input
                  type="text"
                  id="systemName"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                  defaultValue="MediConnect Admin"
                />
              </div>
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  Default Timezone
                </label>
                <select
                  id="timezone"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                >
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Pacific Time (PT)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Default Language
                </label>
                <select
                  id="language"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>
              <div>
                <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-1">
                  Date Format
                </label>
                <select
                  id="dateFormat"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"
                >
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm cursor-pointer font-medium">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettingPage