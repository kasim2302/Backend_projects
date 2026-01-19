import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        <div className="flex items-center border rounded px-2">
          <User className="text-gray-400" />
          <input className="w-full p-2 outline-none" placeholder="Username" />
        </div>

        <div className="flex items-center border rounded px-2">
          <Mail className="text-gray-400" />
          <input className="w-full p-2 outline-none" placeholder="Email" />
        </div>

        <div className="flex items-center border rounded px-2">
          <Lock className="text-gray-400" />
          <input
            type="password"
            className="w-full p-2 outline-none"
            placeholder="Password"
          />
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Register
        </button>

        <p className="text-sm text-center">
          Already have account?{" "}
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
