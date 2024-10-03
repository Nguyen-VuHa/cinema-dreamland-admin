import { useState } from 'react';
import Menu from './Menu';
import UserInfo from './UserInfo';

const SideBar = () => {
    const [isMenuSideBar, setSsMenuSideBar] = useState(false)

    
    return (
        <div className={`fixed top-0 left-0 w-[40%] md:w-[25%] lg:w-[25%] xl:w-[20%] 2xl:w-[17%] h-full flex flex-col
            max-md:z-[999] max-md:backdrop-blur-lg max-md:h-[100vh] max-md:w-[100%] max-md:transition-all max-md:duration-200
            max-md:translate-x-[-100%] border-r-1 border-layout-second
            ${isMenuSideBar ? 'max-md:translate-x-[0]' : '' }
        `}
        >
            <UserInfo />
            <Menu />
        </div>
    );
};

export default SideBar;