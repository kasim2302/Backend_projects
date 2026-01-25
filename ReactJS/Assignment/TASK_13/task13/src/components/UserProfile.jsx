import { useState } from "react";

const UserProfile = () => {
  // Default user object
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    city: "Chennai"
  });

  const [updated, setUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
    setUpdated(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Edit User Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Email"
          />

          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="City"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Update Profile
          </button>
        </form>

        {updated && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ Profile Updated Successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
