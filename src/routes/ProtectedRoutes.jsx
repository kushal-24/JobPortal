import React from "react";
import { Outlet, Navigate, useLocation  } from "react-router-dom";

const ProtectedRoute=({requiredRole})=>{
    return <Outlet></Outlet>
}

export default ProtectedRoute