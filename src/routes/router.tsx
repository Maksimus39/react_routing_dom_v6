import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {ADIDAS} from "../components/pages/Adidas";
import {Crosses} from "../components/pages/crosses";


const PATH = {
    Adidas: "/adidas",
    Puma: "/puma",
    Abibas: "/abibas",
    Prices: "/Prices",
    Model: "/:model/:id",
    PAGEERROR: "/error404",
    PAGEALL: "/*",
} as const;

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Crosses/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.Abibas,
                element: <ADIDAS />,
            }]
    }
]);

