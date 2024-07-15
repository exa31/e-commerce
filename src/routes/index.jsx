import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages";
import Navbar from "../layouts/Navbar";
import Shop from "../pages/Shop";
import data, { getSingleData } from "../apis";
import Login from "../pages/Login";
import Favorite from "../pages/Favorite";
import Product from "../pages/product/_id";
import Checkout from "../pages/Checkout";
import History from "../pages/History";
import ErrorPage from "../pages/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: < LandingPage />
            },
            {
                path: "shop",
                element: <Shop />,
                loader: data,
            },
            {
                path: "/shop/:id",
                element: <Product />,
                loader: getSingleData
            },
            {
                path: "favorite",
                element: <Favorite />
            },
            {
                path: "check-out",
                element: <Checkout />
            },
            {
                path: "history",
                element: <History />
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    }
])

