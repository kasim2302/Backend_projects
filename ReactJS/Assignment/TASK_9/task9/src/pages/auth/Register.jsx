import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold text-center">Register</h2>

        <input className="border p-2 rounded w-full" placeholder="Username" />
        <input className="border p-2 rounded w-full" placeholder="Email" />
        <input className="border p-2 rounded w-full" placeholder="Password" />

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>
      </Card>
    </div>
  );
};

export default Register;
