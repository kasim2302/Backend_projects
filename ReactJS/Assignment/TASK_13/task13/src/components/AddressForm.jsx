import { useState } from "react";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      pincode: ""
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update nested address object
    if (name in formData.address) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Address Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 border p-4 rounded bg-gray-50">
            <h3 className="text-lg font-bold mb-2">
              Address Details
            </h3>

            <p><b>Name:</b> {formData.name}</p>
            <p><b>Street:</b> {formData.address.street}</p>
            <p><b>City:</b> {formData.address.city}</p>
            <p><b>Pincode:</b> {formData.address.pincode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
