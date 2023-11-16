import React from 'react'
import { ReactComponent as Plus } from '../assets/icon-plus.svg'
import { ReactComponent as Minus } from '../assets/icon-minus.svg'
import { ReactComponent as Cart } from '../assets/icon-cart.svg'

import '../styles/productdetails.css'

const ProductDetails = ({ handleDecreaseCount, handleIncreaseCount, handleAddClick, company, title, description, price, discount, oldPrice, counter }) => {

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <p className="product-company">{company}</p>
                <h1>{title}</h1>
                <p className="product-detail-description">{description}</p>
                <div className="product-detail-price-container">
                    <div className="product-detail-price">
                        <p className="product-detail-price-new">£{price} <span className="product-detail-price-discount">{discount}</span></p>
                        <p className="product-detail-price-old">£{oldPrice}</p>
                    </div>
                    <div className='product-shopping-controls'>
                        <div className="product-detail-quantity">
                            <button className="product-detail-quantity-decrease" onClick={handleDecreaseCount}>
                                <Minus/>
                            </button>
                            <p>{counter}</p>
                            <button className="product-detail-quantity-increase" onClick={handleIncreaseCount}>
                                <Plus/>
                            </button>
                        </div>
                        <button className="product-detail-add" onClick={handleAddClick}><Cart />Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails