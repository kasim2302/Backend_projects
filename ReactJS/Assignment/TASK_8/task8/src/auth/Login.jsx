import { useNavigate, Link } from "react-router-dom";
import { User, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <div className="flex items-center border rounded px-2">
          <User className="text-gray-400" />
          <input
            className="w-full p-2 outline-none"
            placeholder="Username"
          />
        </div>

        <div className="flex items-center border rounded px-2">
          <Lock className="text-gray-400" />
          <input
            type="password"
            className="w-full p-2 outline-none"
            placeholder="Password"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm text-center">
          No account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
