import {  Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboardHome";
import Profile from "./dashboard/Profile";
import Settings from "./dashboard/Settings";

const App = () => {
  return (
   
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
   
  );
};

export default App;
