import React from 'react';

type HeaderProps = {
    className?: string,
    children: React.ReactElement,
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
    return (
        <div
            className={`px-4 py-2 flex justify-between items-center w-full sticky top-0 h-header shadow-lg bg-layout-primary ${className || ''}`}
        >
            {children}
        </div>
    );
};

export default Header;