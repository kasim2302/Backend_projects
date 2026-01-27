import { useState } from "react";

const ConditionalUI = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Conditional UI
        </h2>

        {/* ✅ Logical operator rendering */}
        {isLoggedIn && (
          <p className="text-green-600 font-semibold text-lg">
            Welcome User
          </p>
        )}

        {!isLoggedIn && (
          <p className="text-red-500 font-semibold text-lg">
            Please Login
          </p>
        )}

        <button
          onClick={toggleLogin}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Toggle Login
        </button>
      </div>
    </div>
  );
};

export default ConditionalUI;
