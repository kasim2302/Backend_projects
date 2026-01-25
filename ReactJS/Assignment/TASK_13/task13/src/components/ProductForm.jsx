import { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    quantity: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const quantity = Number(product.quantity);

  const getStockStatus = () => {
    if (quantity === 0) return "Out of Stock";
    if (quantity < 5) return "Low Stock";
    return "In Stock";
  };

  const stockColor =
    quantity === 0
      ? "text-red-600"
      : quantity < 5
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Product Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={product.productName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 border p-4 rounded bg-gray-50">
            <h3 className="text-lg font-bold mb-2">
              Product Details
            </h3>

            <p><b>Name:</b> {product.productName}</p>
            <p><b>Price:</b> ₹{product.price}</p>
            <p><b>Quantity:</b> {product.quantity}</p>

            <p className={`mt-2 font-semibold ${stockColor}`}>
              {getStockStatus()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
