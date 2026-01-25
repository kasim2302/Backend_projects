import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>

        <button
          onClick={logout}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
