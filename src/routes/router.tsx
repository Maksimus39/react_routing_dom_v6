import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import App, {PATH} from "../App";
import {Error404} from "../components/pages/Error404";
import {ADIDAS} from "../components/pages/Adidas";
import {PUMA} from "../components/pages/Puma";
import {ABIBAS} from "../components/pages/Abibas";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/protectedPage";
import {ProtectedRoute} from "./ProtectedRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.Adidas,
                element: <ADIDAS/>,
            },
            {
                path: PATH.Puma,
                element: <PUMA/>,
            },
            {
                path: PATH.Abibas,
                element: <ABIBAS/>,
            },
            {
                path: PATH.Model,
                element: <Model/>,
            },
            {
                path: PATH.PROTECTED_PAGE,
                element: <ProtectedRoute>
                    <ProtectedPage/>
                </ProtectedRoute>
            },
            {
                path:PATH.PAGE_ERROR,
                element: <Error404/>,
            }
        ]
    }
]);