import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = () => {

    return (
        <div>
            <span>App Layout</span>
            <Outlet />
        </div>
    );
}

export default AppLayout;