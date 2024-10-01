import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "src/layouts/AuthLayout";
import AuthLayout from "src/layouts/AuthLayout";
import ProtectedRoute from "src/layouts/ProtectedRoute";

const DashboardMain = lazy(() => import("src/pages/dashboard/Dashboard.Main"))
const LoginMain = lazy(() => import("src/pages/auth/login/Login.Main"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout>
            <ProtectedRoute />
        </AppLayout>,
        children: [
            {
                path: "dashboard",
                element: <DashboardMain />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login", 
                element: <LoginMain />,
            },
        ],
    },
]);