import React from 'react'
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className="product_info">
                <p>The lean startup:How constant innovation creates radically successful businesses — Eric Ries</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src='https://miro.medium.com/max/4452/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg' alt=''></img>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
