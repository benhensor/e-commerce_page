import React, { useState }from 'react'
import ImageGallery from './ImageGallery'
import ImagePopout from './ImagePopout'
import ProductDetails from './ProductDetails'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { useCart } from '../context/Cart'
import '../styles/productitem.css'

const ProductItem = ({ id, images, thumbnails, title, company, description, price, discount, oldPrice }) => {

    const { addItemToCart } = useCart()
    
    const [isPopout, setIsPopout] = useState(false)
    const [counter, setCounter] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const product = {
                        id: id,
                        images: images,
                        thumbnails: thumbnails,
                        title: title,
                        company: company,
                        description: description,
                        price: price,
                        discount: discount,
                        oldPrice: oldPrice,
                        quantity: counter
                    }

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
        setCounter(0)
        addItemToCart(product, counter)
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