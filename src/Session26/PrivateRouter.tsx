import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
    children: React.ReactNode;
}

export default function PrivateRouter({ children }: PrivateRouterProps) {
    const [isAuth] = useState<boolean>(true);

    return isAuth ? children : <Navigate to="/login" />;
}
