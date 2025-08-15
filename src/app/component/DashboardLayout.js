// components/DashboardLayout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-2xl font-bold text-blue-600">HealthCheck</div>
        <nav className="mt-10">
          <ul className="space-y-4 px-6 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-600 cursor-pointer">Checks</li>
            <li className="hover:text-blue-600 cursor-pointer">Logs</li>
            <li className="hover:text-blue-600 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">A</div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
