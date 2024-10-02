import React from 'react';
import { BarLoader } from 'react-spinners';

type Props = {
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    loading?: boolean,
    children?: React.ReactNode,
    onClick?: Function,
}

const Button: React.FC<Props> = ({ className, type, loading, children, onClick, ...props }) => {
    return (
        <button
            className={ 
                `flex justify-center items-center w-full px-3 py-2 border-2
                border-primary/60 rounded-md bg-layout-primary text-primary
                hover:border-primary hover:bg-hover transition-all ${className || ''}`
            }
            type={type || 'button'}
            onClick={(e) => {
                if(!loading) {
                    onClick && onClick(e)
                }
            }}
            {...props}
        >
            { loading ? 
                <div className='flex space-x-2 items-center'>
                    <BarLoader color='#f9ab00' /> 
                </div>
            : children }
        </button>
    );
};

export default Button;