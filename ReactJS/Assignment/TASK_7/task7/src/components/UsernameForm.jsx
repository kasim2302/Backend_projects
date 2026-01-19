import { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(username);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className=" text-2xl text-center pb-10">Username Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-600">Hello {submitted}</p>
      )}
    </div>
  );
};

export default UsernameForm;
