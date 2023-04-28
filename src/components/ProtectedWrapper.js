import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const token = localStorage.getItem("authToken");

  return token ? <Outlet /> : <Navigate href="/" />;
};

export default ProtectedWrapper;
