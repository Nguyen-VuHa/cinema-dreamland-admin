import React from 'react';
import DashboardHeader from './Header';
import BodyLayout from 'src/layouts/BodyLayout';

function DashboardMain() {
    return (
        <BodyLayout 
            header={<DashboardHeader />}
            body={
                <div>
                    
                </div>
            }
        />
    );
}

export default DashboardMain;