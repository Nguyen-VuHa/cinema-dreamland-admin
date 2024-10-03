import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { IoCaretForward } from 'react-icons/io5';

type MenuItemChildren = {
    menuName?: string,
    navigation?: string,
}

type MenuItemProps = {
    icon?: ReactNode,
    menuName?: string,
    active?: boolean,
    navigation?: string,
    menuChildren?: Array<MenuItemChildren>,
}

const PaddingSize = 24

const MenuItem: React.FC<MenuItemProps> = ({  icon, menuName, menuChildren }) => {
    const isChildMenu = (menuChildren && menuChildren.length > 0)

    console.log(isChildMenu);
    
    const [isDropdown, setIsDropdown] = useState<boolean>(false)
    const [heightDropdown, setHeightDropdown] = useState<number>(0)
    const menuChildRef = useRef<HTMLLIElement>(null)
    const dropChildRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (dropChildRef.current) {
            
            if (isDropdown)
                dropChildRef.current.style.height = `${heightDropdown + PaddingSize}px`
            else
                dropChildRef.current.style.height = `0`
        }
    }, [heightDropdown, isDropdown])


    return (
        <li>
            <div 
                className={`relative flex items-center p-3
                    space-x-2 py-2 
                    select-none cursor-pointer 
                    text-input-place hover:text-primary transition-all duration-300
                    ${isDropdown ? 'text-primary' : ''}
                `}
                onClick={() => {
                    if (isChildMenu) {
                        setIsDropdown(!isDropdown)
                        if(menuChildRef.current) {
                            setHeightDropdown(menuChildRef.current.clientHeight * menuChildren.length)
                        }
                    }
                }}
            >
                { icon && icon }
                <span className="text-menu leading-[0]">{ menuName }</span>

                {
                    isChildMenu && <div className={`absolute right-[5%] top-[30%] transition-all ${isDropdown ? 'rotate-[90deg]' : ''}`}>
                        <IoCaretForward size={15}/>
                    </div>
                }
            </div>
            {
                isChildMenu
                && <ul 
                    ref={dropChildRef}
                    className={`bg-layout-second px-3 transition-all duration-500 ease-in-out h-0 invisible opacity-0 ${isDropdown ? 'py-3 !visible !opacity-[1]' : ''}`}
                >
                    {
                        menuChildren.map((menu, index) => {
                            if (index === 0) {
                                return <li
                                    key={index}
                                    ref={menuChildRef}
                                    className='select-none cursor-pointer text-input-place hover:text-primary transition-all duration-300 py-1'
                                >
                                    {menu.menuName}
                                </li>
                            } else {
                                return  <li
                                    key={index}
                                    className='select-none cursor-pointer text-input-place hover:text-primary transition-all duration-300 py-1'
                                >
                                {menu.menuName}
                                </li>
                            }
                        })
                    }
                </ul>   
            }
        </li>
    );
};


export default MenuItem;