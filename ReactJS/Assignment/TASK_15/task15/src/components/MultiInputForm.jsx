import { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // ✅ Single handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value   // dynamic key
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Multi Input Form
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </form>

        {/* Display entered data */}
        <div className="mt-6 border-t pt-4 space-y-1">
          <p>
            <span className="font-semibold">Username:</span>{" "}
            {formData.username || "—"}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {formData.email || "—"}
          </p>
          <p>
            <span className="font-semibold">Password:</span>{" "}
            {formData.password || "—"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiInputForm;
