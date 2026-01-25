import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">My App</h1>

      <div className="space-x-4">
        {!isLoggedIn && (
          <>
            <Link to="/" className="hover:underline">Register</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded ml-2"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;