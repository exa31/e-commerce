import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/store";
import Navbar from "../layouts/index";
import Shop from "../pages/store/Shop";
import data, { getSingleData } from "../apis";
import Login from "../pages/login/Login";
import Favorite from "../pages/store/Favorite";
import Product from "../pages/store/product/_id";
import Checkout from "../pages/store/Checkout";
import History from "../pages/store/History";
import ErrorPage from "../pages/ErrorPage";
import Registrasi from "../pages/login/Registrasi";
import DashBoard from '../pages/dashboard/index';
import DashBoardLayout from "../layouts/DashboardLayout";
import Edit from "../pages/dashboard/Edit";
import AddProduct from "../pages/dashboard/AddProduct";

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
                path: "shop/:id",
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
            },

        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/login/registrasi",
        element: <Registrasi />
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'products',
                element: <DashBoard />,
                loader: data,
            },
            {
                path: 'products/edit/:id',
                element: <Edit />,
                loader: getSingleData
            },
            {
                path: 'addproduct',
                element: <AddProduct />,
            }
        ]
    }


])

