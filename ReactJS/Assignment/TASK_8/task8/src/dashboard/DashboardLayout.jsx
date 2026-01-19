import { NavLink, Outlet } from "react-router-dom";

const linkClass = ({ isActive }) =>
  isActive
    ? "bg-blue-600 text-white px-4 py-2 rounded"
    : "text-gray-700 hover:bg-gray-200 px-4 py-2 rounded";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-5 space-y-3">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

        <NavLink to="/dashboard" end className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/dashboard/profile" className={linkClass}>
          Profile
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
