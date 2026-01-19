import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card";

const ProductDetails = () => {
  const { state } = useLocation();
  const [price, setPrice] = useState(state.price);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold">{state.name}</h2>
        <p>Price: ₹{price}</p>

        <button
          onClick={() => setPrice(price + 1000)}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Increase Price
        </button>
      </Card>
    </div>
  );
};

export default ProductDetails;
