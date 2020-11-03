import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="" />
                
                <div className="home_row">
                    {/* Product */}
                    < Product />
                    {/* Product */}
                    < Product />


                </div>

                <div className="home_row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                    < Product />
                    < Product />
                     < Product />

                </div>

                <div className="home_row">
                    {/* Product */}
                     < Product />

                </div>
            </div>
        </div>
    );
}

export default Home
