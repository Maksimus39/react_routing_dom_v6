import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App, {PATH} from "../App";
import {Error404} from "../components/pages/Error404";
import {ADIDAS} from "../components/pages/Adidas";
import {PUMA} from "../components/pages/Puma";
import {ABIBAS} from "../components/pages/Abibas";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/protectedPage";
import {LoginPage} from "../components/pages/Login";
import {Prices} from "../components/pages/Prices";


const publicRoutes: RouteObject[] = [
    {
        path:'/',
        element:<Navigate to={PATH.Adidas}/>
    },
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
        path: PATH.PAGE_ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.Login,
        element: <LoginPage/>
    },
    {
        path: PATH.PAGE_ALL,
        element: <Prices/>
    }
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const thisIsAuth = false;

    return thisIsAuth ? <Outlet/> : <Navigate to={'/login'}/>
};


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.PAGE_ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }
]);