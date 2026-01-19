import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/Card";

const OrderDetails = () => {
  const { state } = useLocation();
  const [status, setStatus] = useState(state.status);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <p>Order ID: {state.orderId}</p>
        <p>Status: <b>{status}</b></p>

        <button
          onClick={() => setStatus("Delivered")}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Mark Delivered
        </button>
      </Card>
    </div>
  );
};

export default OrderDetails;
