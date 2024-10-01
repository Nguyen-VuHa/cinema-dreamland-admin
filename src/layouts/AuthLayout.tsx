import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/auth/login")
    }, [])

    return (
        <div>
            <span>Auth Layout</span>
            <Outlet />
        </div>
    );
}

export default AppLayout;