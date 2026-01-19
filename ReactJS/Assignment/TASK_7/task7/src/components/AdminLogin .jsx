import { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123456") {
      setLoggedIn(true);
    } else {
      setError("❌ Invalid Credentials");
    }
  };

  if (loggedIn) {
    return (
      <h2 className="text-center mt-10 text-2xl text-green-600">
        Welcome Admin 🎉
      </h2>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl text-center pb-10">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full border p-2 rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
