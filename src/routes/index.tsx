import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import ProductDetail from "../Session26/ProductDetail";
import Student from "../Session26/Student";
import Student03 from "../Session26/Student03";
import Student04 from "../Session26/Student04";
import Login from "../Session26/Login";
import PrivateRouter from "../Session26/PrivateRouter";
import Account from "../Session26/Account";
import Teams from "../Session26/Teams";
import TeamsIndex from "../Session26/TeamIndex";
import Team from "../Session26/Team";
import Loading from "../Session26/Loading";   // import loading

// Lazy import
const LazyLoadComp = lazy(() => import("../Session26/LazyLoadComp"));

const routers = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/account",
        element: (
            <PrivateRouter>
                <Account />
            </PrivateRouter>
        ),
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
    {
        path: "/student/:name",
        element: <Student />,
    },
    {
        path: "/student",
        element: <Student03 />,
    },
    {
        path: "/studentName",
        element: <Student04 />,
    },
    {
        path: "/teams",
        element: <Teams />,
        children: [
            {
                index: true,
                element: <TeamsIndex />,
            },
            {
                path: ":teamId",
                element: <Team />,
            },
        ],
    },
    {
        path: "/lazy",
        element: (
            <Suspense fallback={<Loading />}>
                <LazyLoadComp />
            </Suspense>
        ),
    },
]);

export default routers;
