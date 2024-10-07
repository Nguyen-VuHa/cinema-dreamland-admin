import React from 'react';


type BodyLayoutProps = {
    header: React.ReactElement,
    body: React.ReactElement,
}

const BodyLayout: React.FC<BodyLayoutProps> = ({ header, body }) => {
    return (
        <div className='w-full md:ml-[25%] lg:ml-[25%] xl:ml-[20%] 2xl:ml-[17%] pb-10'>
            { header }
            <main className='w-full h-auto px-5 max-sm:px-3 lg:px-10 h-[120vh]'>
                { body }
            </main>
        </div>
    );
};

export default BodyLayout;