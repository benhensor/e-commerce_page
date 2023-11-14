import React, { useState } from 'react'
import '../styles/imagecarousel.css'

const ImageCarousel = ({ images }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

    const currentImage = images[currentImageIndex]


    return (
        <div className='image-carousel-container'>
            <img className='image-display' src={currentImage.url} alt={currentImage.name} />
            <button className='image-previous' onClick={handlePrevious}><img src="images/icon-previous.svg" alt="Previous" /></button>
            <button className='image-next' onClick={handleNext}><img src="images/icon-next.svg" alt="Next" /></button>
        </div>
    )
}

export default ImageCarousel