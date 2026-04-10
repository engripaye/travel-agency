import React from "react";
import type { RouteConfig } from "@react-router/dev/routes";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";

const routes: ({ path: string; element: React.JSX.Element })[] = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/bookings",
        element: <Bookings />,
    },
];

export default routes;