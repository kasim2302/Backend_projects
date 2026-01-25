import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState("");
  const [dashboard, setDashboard] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
    setError("");
    setDashboard("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, role } = loginData;

    if (!username || !password || !role) {
      setError("All fields are required");
      return;
    }

    if (role === "admin") {
      setDashboard("Admin Dashboard");
    } else {
      setDashboard("User Dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <select
            name="role"
            value={loginData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 font-semibold mt-4 text-center">
            ❌ {error}
          </p>
        )}

        {/* Role Based Rendering */}
        {dashboard && (
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-green-600">
              {dashboard}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
