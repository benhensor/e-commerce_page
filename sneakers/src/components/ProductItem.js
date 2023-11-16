import React, { useState, useContext }from 'react'
import ImageGallery from './ImageGallery'
import ImagePopout from './ImagePopout'
import ProductDetails from './ProductDetails'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { CountContext } from '../context/Count'
import '../styles/productpage.css'

const ProductItem = ({ images, thumbnails, title, company, description, price, discount, oldPrice }) => {

    const {setCount} = useContext(CountContext)
    const [isPopout, setIsPopout] = useState(false)
    const [counter, setCounter] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const isDesktop = UseMediaQuery('(min-width: 769px)')

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => {
        if (prevIndex === 0) {
            return images.length - 1
        }
        return prevIndex - 1
        })
    }

    const handleImageClick = () => {
        setIsPopout(true)
    }

    const currentImage = images?.[currentImageIndex]

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
        <section className='product-item'>
            <div className="product-container">
                <ImageGallery 
                    currentImage={currentImage}
                    thumbnails={thumbnails} 
                    isDesktop={isDesktop}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    handleImageClick={handleImageClick}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex}
                />
                {isPopout && (
                    <ImagePopout 
                        images={images}
                        currentImage={currentImage}
                        thumbnails={thumbnails}
                        setIsPopout={setIsPopout}
                    />
                )}
                <ProductDetails
                    company={company}
                    title={title}
                    description={description}
                    price={price}
                    discount={discount}
                    oldPrice={oldPrice}
                    counter={counter}
                    handleIncreaseCount={handleIncreaseCount} 
                    handleDecreaseCount={handleDecreaseCount} 
                    handleAddClick={handleAddClick}
                />
            </div>
        </section>
    )
}

export default ProductItem