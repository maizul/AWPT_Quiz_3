import React, { useState } from 'react';
import Packagedata from '../DB/Packagedata.js';
import Packages from './Packages';
const PackageView = () => {
    const data=Packagedata
    const [packages]=useState(data)
    
    return (
        <div>
            
            <div className="row">
                <div className="title">
                    <h2><center>Packages</center></h2>
                </div>
                {
                    packages.map(packag=><Packages item={packag}></Packages>)
                }
            </div>
        </div>
    );
    
};

export default PackageView;