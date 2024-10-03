import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppName, DashboardPage, LoginPage, NotFoundPage } from "src/constants/title";
import AppLayout from "src/layouts/AppLayout";
import AuthLayout from "src/layouts/AuthLayout";
import PrivateRoute from "src/layouts/PrivateRoute";
import PublicRoute from "src/layouts/PublicRoute";
import TitleLayout from "src/layouts/TitleLayout";

const DashboardMain = lazy(() => import("src/pages/dashboard/Dashboard.Main"))
const MovieMain = lazy(() => import("src/pages/movies/Movie.Main"))

const LoginMain = lazy(() => import("src/pages/auth/login/Login.Main"))
const NotFoundMain = lazy(() => import("src/pages/not-found/NotFound.Main"))

export const router = createBrowserRouter([
    {
        path: '/auth',
        element: <PublicRoute>
            <AuthLayout />
        </PublicRoute>, 
        children: [
            {
                path: "login", 
                element: <TitleLayout title={`${AppName} - ${LoginPage}`}>
                    <LoginMain />
                </TitleLayout>,
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
                path: "",
                element: <TitleLayout title={`${AppName} - ${DashboardPage}`}>
                    <DashboardMain />
                </TitleLayout>,
            },
            {
                path: "movies",
                element: <MovieMain />,
            },
        ],
    },
    {
        path: "/*",
        element:  <TitleLayout title={`${AppName} - ${NotFoundPage}`}>
            <NotFoundMain />
        </TitleLayout>,
    }
]);
