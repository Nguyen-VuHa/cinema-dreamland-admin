import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Image from 'src/components/Image';

type Props = {
    children?: React.ReactNode;
}

const AppLayout: React.FC<Props> = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/auth/login")
    }, [navigate])

    return (
        <div className='w-full h-[100vh] fixed bg-auth-layout bg-cover bg-center bg-no-repeat'>
            <div className='w-full h-full flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-5'>
                <div 
                    className='w-full flex flex-col items-center bg-layout-primary p-[3.125rem] max-md:p-[2rem] max-w-[28.125rem] 
                        max-sm:p-[1.5rem] max-sm:max-w-[90%] space-y-2 border-2 border-layout-second rounded
                    '
                >
                    <Image
                        alt='NO LOGO'
                        src="/logo.png"
                        className='!w-[150px]'
                    />
                    <Outlet />
                </div>
            </div>
         
        </div>
    );
}

export default AppLayout;