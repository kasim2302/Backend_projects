import { useEffect, useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    const saved = localStorage.getItem("signup");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signup", JSON.stringify(form));
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl text-center pb-10">Signup form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2 rounded" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input className="w-full border p-2 rounded" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input className="w-full border p-2 rounded" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />

        <button className="w-full bg-purple-600 text-white py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
