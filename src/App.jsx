import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import TokenContextProvider from "./Context/Token";

const App = () => {
  return (
    <TokenContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/loading" element={<Loading />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </TokenContextProvider>
  );
};

export default App;
