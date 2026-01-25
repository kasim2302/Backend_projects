import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Approutes;
