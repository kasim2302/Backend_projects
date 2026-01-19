import { Routes, Route } from "react-router-dom";

import ProductList from "../pages/products/ProductList"
import ProductDetails from "../pages/products/ProductDetails";
import EditProduct from "../pages/products/EditProduct";
import OrderPage from "../pages/orders/OrderPage";
import OrderDetails from "../pages/orders/OrderDeatails";
import Profile from "../pages/profile/Profile";
import ThemePage from "../pages/theme/ThemePage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/edit-product" element={<EditProduct />} />

      <Route path="/order" element={<OrderPage />} />
      <Route path="/order-details" element={<OrderDetails />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/theme" element={<ThemePage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
