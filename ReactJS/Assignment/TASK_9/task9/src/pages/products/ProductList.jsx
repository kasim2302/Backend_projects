import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const ProductList = () => {
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>

        <button
          onClick={() =>
            navigate("/product-details", { state: product })
          }
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          View Details
        </button>

        <button
          onClick={() =>
            navigate("/edit-product", { state: product })
          }
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Edit Product
        </button>
      </Card>
    </div>
  );
};

export default ProductList;
