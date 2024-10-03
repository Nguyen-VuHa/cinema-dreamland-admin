import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

type Props = {
    title: string,
    children: React.ReactElement,
}

const TitleLayout: React.FC<Props> = ({ title, children }) => {
    const location = useLocation();

    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [location, title]);

    return children;
};

export default TitleLayout;