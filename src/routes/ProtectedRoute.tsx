import React, {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode;
};

export const ProtectedRoute = ({children}: Props) => {
    const logged = false; // Здесь должна быть логика проверки авторизации


    return (
        <div>
            {logged ? children : <Navigate to="/login"/>}
        </div>
    )
};