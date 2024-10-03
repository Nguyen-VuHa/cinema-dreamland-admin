import { IoApps, IoFilmSharp } from "react-icons/io5";
import { DASHBOARD_PATH } from "src/constants/path";
import MenuItem from "./MenuItem";

const Menu = () => {
    const menus = [
        {
            icon: <IoApps size={20} />,
            menuName: 'TRANG CHỦ',
            navigation: DASHBOARD_PATH,
        },
        {
            icon: <IoFilmSharp size={20} />,
            menuName: 'STUDIO',
            navigation: '#',
            menuChildren: [
                {
                    menuName: 'Video',
                    navigation: "",
                },
            ]
        },
    ]

    return (
        <div className='h-full'>
            <ul className='space-y-2 h-full py-5'>
                {
                    menus.map((menu, index) => {
                        return <MenuItem 
                            key={index}
                            icon={menu.icon}
                            menuName={menu.menuName}
                            navigation={menu.navigation}
                            menuChildren={menu.menuChildren}
                        />
                    })
                }
            </ul>
        </div>
    );
};

export default Menu;