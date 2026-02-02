import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (!username.trim()) return;
    login(username);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        className="border px-4 py-2 rounded"
      />

      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
