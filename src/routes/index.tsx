import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "src/layouts/AppLayout";
import AuthLayout from "src/layouts/AuthLayout";
import PrivateRoute from "src/layouts/PrivateRoute";
import PublicRoute from "src/layouts/PublicRoute";

const DashboardMain = lazy(() => import("src/pages/dashboard/Dashboard.Main"))
const MovieMain = lazy(() => import("src/pages/movies/Movie.Main"))
const LoginMain = lazy(() => import("src/pages/auth/login/Login.Main"))

export const router = createBrowserRouter([
    {
        path: '/auth',
        element: <PublicRoute>
            <AuthLayout />
        </PublicRoute>, 
        children: [
            {
                path: "login", 
                element: <LoginMain />,
            },
        ],
    },
    {
        path: "/",
        element: <PrivateRoute>
            <AppLayout />
        </PrivateRoute>,
        children: [
            {
                path: "dashboard",
                element: <DashboardMain />,
            },
            {
                path: "movies",
                element: <MovieMain />,
            },
        ],
    },
]);
