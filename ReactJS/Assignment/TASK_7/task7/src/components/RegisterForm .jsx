import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl text-center pb-10">Register Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2 rounded" name="name" placeholder="Name" onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full border p-2 rounded" name="mobile" placeholder="Mobile" onChange={handleChange} />

        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Register
        </button>
      </form>

      {submitted && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mobile: {submitted.mobile}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
