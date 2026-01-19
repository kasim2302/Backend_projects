import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  const order = {
    orderId: 101,
    status: "Pending",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={() =>
          navigate("/order-details", { state: order })
        }
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        View Order
      </button>
    </div>
  );
};

export default OrderPage;
