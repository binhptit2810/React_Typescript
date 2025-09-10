import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ListUser from "../pages/ListUser";
import UserDetail from "../pages/UserDetail";
// import DefaultLayout from "../layouts/DefaultLayout";
// import HomeSix from "../pages/HomeSix";
// import ProductSix from "../pages/ProductSix";
// import DetailSix from "../pages/DetailSix";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

const routers = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Home />
    // },
    // {
    //     path: "/about",
    //     element: <About />
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />
    // },
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    // {
    //     path: "/register",
    //     element: <Register />
    // },
    // {
    //     path: "*",
    //     element: <NotFound />
    // },
    // Bài 6
    // {
    //     path: "/",
    //     element: <DefaultLayout />,
    //     children: [
    //         { index: true, element: <HomeSix /> },
    //         { path: "product", element: <ProductSix /> },
    //         { path: "detail", element: <DetailSix /> },
    //         { path: "*", element: <NotFound /> },
    //     ],
    // },
    // Bài 7
    // {
    //     path: "/",
    //     element: <CustomLink />
    // },
    // {
    //     path: "/home-page",
    //     element: <HomePage />
    // },
    // {
    //     path: "*",
    //     element: <NotFound />
    // }
    // Bài 8
    {
        path: "/",
        element: <ListUser />
    },
    {
        path: "/user-detail/:id",
        element: <UserDetail />
    },
    {
        path: "*",
        element: <NotFound />
    }

])
export default routers