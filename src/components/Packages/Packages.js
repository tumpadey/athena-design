import React from 'react';
import './Packages.css';

const Packages = () => {
    return (
        <div className="container mt-5">
            <h1>Choose Your Dedicated Team</h1>
           <div className="row d-flex justify-content-between mt-5">
               <div className="col-md-3  package">
                    <div>
                        <h1>$199</h1>
                        <h6 style={{ color:'gray'}}>For Basic</h6>
                        <h6>-----------</h6>
                        <h6>HomePage</h6>
                        <h6>No Inner Page</h6>
                        <h6>Asset file</h6>
                        <h6>Source file</h6>
                        <h6>Free Stock Photos</h6>
                        <h6>10 Days Free support</h6>
                        <h6>24/7 support</h6>
                    </div>
               </div>
               <div className="col-md-3 package">
                    <div>
                        <h1>$399</h1>
                        <h6 style={{ color:'gray'}}>For Preferred</h6>
                        <h6>-----------</h6>
                        <h6>HomePage</h6>
                        <h6>4 Inner Page</h6>
                        <h6>Asset file</h6>
                        <h6>Source file</h6>
                        <h6>Free Stock Photos</h6>
                        <h6>20 Days Free support</h6>
                        <h6>24/7 support</h6>
                    </div>
               </div>
               <div className="col-md-3 package">
                    <div>
                        <h1>$599</h1>
                        <h6 style={{ color:'gray'}}>For Elite</h6>
                        <h6>-----------</h6>
                        <h6>HomePage</h6>
                        <h6>8 Inner Page</h6>
                        <h6>Asset file</h6>
                        <h6>Source file</h6>
                        <h6>Free Stock Photos</h6>
                        <h6>30 Days Free support</h6>
                        <h6>24/7 support</h6>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Packages;