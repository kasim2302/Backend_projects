import { useState } from "react";

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(""); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // ❌ Empty field check
    if (!email || !password) {
      setError("All fields are required");
      return; // ⛔ stop execution
    }

    // ❌ Email validation
    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    // ❌ Password length check
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // ✅ If all validations pass
    alert("Form Submitted Successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Validation Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {error && (
          <p className="text-red-500 font-semibold mt-4 text-center">
            ❌ {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default ValidationForm;
