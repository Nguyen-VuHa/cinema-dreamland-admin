import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from 'src/components/Sidebar';

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = () => {

    return (
        <div className="flex w-full min-h-[100vh] h-[auto] bg-layout-primary text-primary h-auto">
            <SideBar />
            <Outlet />
        </div>
    );
}

export default AppLayout;