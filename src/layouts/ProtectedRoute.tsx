import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    
    let access_token = Cookies.get("access_token")

    return (
        <>
            { access_token ? <Navigate to="/dashboard" /> : <Navigate to="/auth/login" />}
        </>
    );
}

export default ProtectedRoute;