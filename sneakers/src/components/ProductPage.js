import React, { useState, useContext }from 'react'
import ImageCarousel from './ImageCarousel'
import ImageGallery from './ImageGallery'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { CountContext } from '../context/Count'
import '../styles/productpage.css'

const ProductPage = ({ images, name, company, description, price, discount, oldPrice }) => {

    const {setCount} = useContext(CountContext)
    const [counter, setCounter] = useState(0)

    const isDesktop = UseMediaQuery('(min-width: 769px)')
    const isTablet = UseMediaQuery('(max-width: 768px)')

    const handleIncreaseCount = () => {
        setCounter(counter + 1)
    }

    const handleDecreaseCount = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleAddClick = () => {
        setCount(prevCount => prevCount + counter)
        setCounter(0)
    }

    return (
        <section>
            <div className="product-container">
                { isTablet && <ImageCarousel images={images}/> }
                { isDesktop && <ImageGallery /> }
                <div className="product-detail-container">
                    <div className="product-detail">
                        <p className="product-company">{company}</p>
                        <h1>{name}</h1>
                        <p className="product-detail-description">{description}</p>
                        <div className="product-detail-price-container">
                            <div className="product-detail-price">
                                <p className="product-detail-price-new">£{price}</p>
                                <p className="product-detail-price-discount">{discount}</p>
                                <p className="product-detail-price-old">£{oldPrice}</p>
                            </div>
                            <div className="product-detail-quantity">
                                <button className="product-detail-quantity-decrease" onClick={handleDecreaseCount}>
                                    <img src="images/icon-minus.svg" alt="Minus" />
                                </button>
                                <p>{counter}</p>
                                <button className="product-detail-quantity-increase" onClick={handleIncreaseCount}>
                                    <img src="images/icon-plus.svg" alt="Plus" />
                                </button>
                            </div>
                            <button className="product-detail-add" onClick={handleAddClick}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage