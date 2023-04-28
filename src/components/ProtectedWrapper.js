import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedWrapper = () => {
  const token = localStorage.getItem("authToken");

  return token ? <Outlet /> : <div>User not logged in</div>;
};

export default ProtectedWrapper;
