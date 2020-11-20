import React from 'react';
import './Packages.css';

const Packages = () => {
    return (
        <div className="package-bg">
            <div className="container pt-5">
            <h1>Choose Your Dedicated Team</h1>
           <div className="row d-flex justify-content-between mt-5">
               <div className="col-sm-12 col-md-6 col-lg-3  package">
                    <div>
                        <h1>$199</h1>
                        <p style={{ color:'gray'}}>For Basic</p>
                        <div className='borders'></div>
                        <p>HomePage</p>
                        <p>No Inner Page</p>
                        <p>Asset file</p>
                        <p>Source file</p>
                        <p>Free Stock Photos</p>
                        <p>10 Days Free support</p>
                        <p>24/7 support</p>
                        <button className='contactBtn display mt-2'>Order Now</button>
                    </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-3 package">
                    <div>
                        <h1>$399</h1>
                        <p style={{ color:'gray'}}>For Preferred</p>
                        <div className='borders mb-2'></div>
                        <p>HomePage</p>
                        <p>4 Inner Page</p>
                        <p>Asset file</p>
                        <p>Source file</p>
                        <p>Free Stock Photos</p>
                        <p>20 Days Free support</p>
                         <p>24/7 support</p>
                        <button className='contactBtn display mt-2'>Order Now</button>
                    </div>
               </div>
               <div className="col-sm-12 col-md-6 col-lg-3 package">
                    <div>
                        <h1>$599</h1>
                        <p style={{ color:'gray'}}>For Elite</p>
                        <div className='borders'></div>
                        <p>HomePage</p>
                        <p>8 Inner Page</p>
                        <p>Asset file</p>
                        <p>Source file</p>
                        <p>Free Stock Photos</p>
                        <p>30 Days Free support</p>
                        <p>24/7 support</p>
                        <button className='contactBtn display mt-2'>Order Now</button>
                    </div>
               </div>
           </div>
        </div>
        </div>
    );
};

export default Packages;