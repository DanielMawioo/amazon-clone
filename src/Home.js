import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt=""></img>
           
                <div className='home_row'>
                    <Product
                        id='12345622'
                        title='The lean startup'
                        price={29.99}
                        image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt'
                        rating={5}
                    />
                    <Product
                        id='1234563'
                        title='The Millionaire Fastlane Crack the Code to Wealth and Live Rich for a Lifetime'
                        price={39.99}
                        image='https://kbimages1-a.akamaihd.net/b3462945-a064-4155-8eb7-1365726fe23b/1200/1200/False/the-millionaire-fastlane-1.jpg'
                        rating={4}
                    />
        
                </div>
                
                <div className='home_row'>
                    <Product
                        id='1234564'
                        title='The MacBook Pro 13" 2020 '
                        price={1029.99} image='https://cdn.shopify.com/s/files/1/0259/1735/products/macbook-pro-13-inch-2020-textured-matt-white-skins_2048x.jpg?v=1599564514'
                        rating={3}
                    />
                    <Product
                        id='1234565'
                        title='MACBOOK PRO 13" '
                        price={29.99}
                        image='https://cdn.shopify.com/s/files/1/0259/1735/files/macbook-pro-13-inch-2020-white-carbon-fibre-skins_2048x2048.jpg?v=1592915339'
                        rating={2}
                    />
                    <Product
                        id='1234566'
                        title='Dell XPS 15 and XPS 17' price={29.99}
                        image='https://cdn.mos.cms.futurecdn.net/FkMhmL6YzQmj7unhsupKMR-1200-80.png'
                        rating={5}
                    />
                   
                </div>
                
                <div className='home_row'>
                    <Product
                        id='1234567'
                        title='Most Expensive 2020 Chevy Corvette Coupe R1. With the C8 being released initially in the base Stingray guise,'
                        price={10290.99}
                        image='https://cdn.motor1.com/images/mgl/MQbzw/s1/2020-chevy-corvette-stingray-coupe-most-expensive-version.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home