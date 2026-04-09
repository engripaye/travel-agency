import React from "react";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";

export const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/bookings", element: <Bookings /> },
];