import { createBrowserRouter } from "react-router-dom";
// import TaskList from "../Session27/TaskList";
// import TaskDetail from "../Session27/TaskDetail";
// import NavProduct from "../components/NavProduct";
// import ProductDetail from "../Session26/ProductDetail";
// import ProductList from "../Session27/ProductList";
import BlogLayout from "../Session27/BlogLayout";
import Posts from "../Session27/Posts";
import PostDetail from "../Session27/PostDetail";
// import NavProduct from "../components/NavProduct";
// import ProductDetail from "../Session27/ProductDetail";
// import Home from "../Session27/Home";
// import About from "../Session27/About";
// import Contact from "../Session27/Contact";
// import Navbar from "../components/Navbar";

const routers = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Navbar />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Home />
    //         },
    //         {
    //             path: "about",
    //             element: <About />
    //         },
    //         {
    //             path: "contact",
    //             element: <Contact />
    //         }
    //     ]
    // }
    // bài 2
    // {
    //     path: "/products",
    //     element: <NavProduct />,
    //     children: [
    //         {
    //             index: true,
    //             element: <ProductList />
    //         },
    //         {
    //             path: ":id",
    //             element: <ProductDetail />
    //         }
    //     ]
    // }
    // bài 3 
    // {
    //     path: "/",
    //     element: <TaskList />

    // },
    // {
    //     path: ":id",
    //     element: <TaskDetail />
    // }
    // bài 04
    // {
    //     path: "/products",
    //     element: <NavProduct />,
    //     children: [
    //         {
    //             index: true,
    //             element: <ProductList />
    //         },
    //         {
    //             path: ":id",
    //             element: <ProductDetail />
    //         }
    //     ]
    // }
    // bài 05
    {
        path: "/blog",
        element: <BlogLayout />,
        children: [
            {
                path: "posts",
                element: <Posts />
            },
            {
                path: "posts/:id",
                element: <PostDetail />
            }
        ]
    }


]);

export default routers;
