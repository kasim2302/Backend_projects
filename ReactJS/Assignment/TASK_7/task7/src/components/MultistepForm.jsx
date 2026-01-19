import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl text-center pb-10"> Multi Step Form</h2>
      {step === 1 && (
        <>
          <input className="w-full border p-2 rounded" name="name" placeholder="Name" onChange={handleChange} />
          <input className="w-full border p-2 rounded" name="email" placeholder="Email" onChange={handleChange} />
          <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={() => setStep(2)}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input className="w-full border p-2 rounded" name="mobile" placeholder="Mobile" onChange={handleChange} />
          <input className="w-full border p-2 rounded" name="age" placeholder="Age" onChange={handleChange} />

          <div className="flex gap-3">
            <button className="flex-1 bg-gray-400 text-white py-2 rounded" onClick={() => setStep(1)}>
              Previous
            </button>
            <button className="flex-1 bg-green-600 text-white py-2 rounded" onClick={() => console.log(data)}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
