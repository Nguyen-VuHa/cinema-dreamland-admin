import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from 'src/components/Sidebar';

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = () => {

    return (
        <div className="flex w-full min-h-[100vh] h-[auto] bg-layout-primary text-primary h-auto px-5 max-sm:px-3 lg:px-10">
            <SideBar />
            <div className='w-full md:ml-[25%] lg:ml-[25%] xl:ml-[20%] 2xl:ml-[17%] pb-10'>
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;