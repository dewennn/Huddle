import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UserContextProvider from "./Context/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/loading" element={<Loading />} />
        
        <Route path="/dashboard" element={
          <UserContextProvider>
            <Dashboard />
          </UserContextProvider>
        } />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
