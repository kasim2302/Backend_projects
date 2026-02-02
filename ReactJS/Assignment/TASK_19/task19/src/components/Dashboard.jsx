import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">
        Welcome, {user.name} 👋
      </h1>

      <button
        onClick={logout}
        className="px-6 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
