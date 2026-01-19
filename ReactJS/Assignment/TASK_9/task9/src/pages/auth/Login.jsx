import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input className="border p-2 rounded w-full" placeholder="Username" />
        <input className="border p-2 rounded w-full" placeholder="Password" />

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </Card>
    </div>
  );
};

export default Login;
