import { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={student.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Register
          </button>
        </form>

        {submitted && (
          student.age < 18 ? (
            <p className="text-red-500 font-semibold mt-4 text-center">
              Not eligible for course
            </p>
          ) : (
            <div className="border mt-4 p-4 rounded bg-green-50">
              <h3 className="font-bold mb-2">Student Details</h3>
              <p>Name: {student.name}</p>
              <p>Email: {student.email}</p>
              <p>Course: {student.course}</p>
              <p>Age: {student.age}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default StudentForm;
