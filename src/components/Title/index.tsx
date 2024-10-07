import React from 'react';

type TitleProps = {
    title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h1
            className='m-0 p-0 text-3xl uppercase font-semibold'
        >   
            { title }
        </h1>
    );
};

export default Title;