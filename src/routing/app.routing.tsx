import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import { Home } from "../pages/home";

export function AppRouting(): ReactElement {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "*",
            element: <Home/>,
        },
    ]);

    return <RouterProvider router={router} />
}
