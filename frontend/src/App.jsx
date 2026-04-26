import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UsersSignUp from "./pages/UsersSignUp";
import UsersLogin from "./pages/UsersLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import UserProtectWrapperHOC from "./pages/UserProtectWrapperHOC";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<UsersSignUp />} />
        <Route path="/login" element={<UsersLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapperHOC>
              <Home />
            </UserProtectWrapperHOC>
          }
        />

        <Route
          path="/user/logout"
          element={
            <UserProtectWrapperHOC>
              <UserLogout />
            </UserProtectWrapperHOC>
          }
        />

        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
      ;
    </div>
  );
};

export default App;
