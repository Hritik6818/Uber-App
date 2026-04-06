import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UsersSignUp from "./pages/UsersSignUp";
import UsersLogin from "./pages/UsersLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UsersSignUp />} />
        <Route path="/login" element={<UsersLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
      ;
    </div>
  );
};

export default App;
