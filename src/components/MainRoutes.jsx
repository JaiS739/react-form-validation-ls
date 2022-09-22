import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
