import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UserContextProvider from "./Context/User";
import Layout from "./pages/Layout";
import TextChat from "./pages/TextChat";
import FriendRequestsContextProvider from "./Context/FriendRequestsContext";
import FetchFriendListProvider from "./Context/FriendListContext";

const App = () => {
  return (
    <UserContextProvider>
    <FriendRequestsContextProvider>
    <FetchFriendListProvider>

    <Router>
      <Routes>        
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/loading" element={<Loading />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='chat/:friendId' element={<TextChat/>}/>
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>

    </FetchFriendListProvider>
    </FriendRequestsContextProvider>
    </UserContextProvider>
  );
};

export default App;
