import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser.username === login.username &&
      storedUser.password === login.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          placeholder="Username"
          onChange={(e) =>
            setLogin({ ...login, username: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLogin({ ...login, password: e.target.value })
          }
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-green-500 text-white py-2 rounded">
          Login
        </button>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
