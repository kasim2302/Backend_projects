import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card";

const EditProduct = () => {
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    name: state.name,
    price: state.price,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold">Edit Product</h2>

        <input
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          className="w-full border p-2 rounded"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />

        <button
          onClick={() => console.log("Saved:", formData)}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Save
        </button>
      </Card>
    </div>
  );
};

export default EditProduct;
