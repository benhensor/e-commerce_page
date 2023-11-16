import React from 'react'
import { ReactComponent as Next } from '../assets/icon-next.svg';
import { ReactComponent as Previous } from '../assets/icon-previous.svg';
import '../styles/imagegallery.css'

const ImageGallery = ({ 
    currentImage,
    thumbnails, 
    isDesktop,
    handleImageClick,
    handleNext,
    handlePrevious,
    currentImageIndex,
    setCurrentImageIndex,     
}) => {

    return (
        <div className='image-carousel-container'>
            <img className='image-display' src={currentImage.url} alt={currentImage.name} onClick={handleImageClick}/>
            <div className={`image-controls ${isDesktop ? 'hidden' : ''}`}>
            <button className='image-previous' onClick={handlePrevious}><Previous className='icon-previous' /></button>
            <button className='image-next' onClick={handleNext}><Next className='icon-previous' /></button>
            </div>
        <div className='image-thumbnails-container'>
            {thumbnails.map((thumbnail, index) => {
                return (
                    <img 
                        className={`image-thumbnail ${index === currentImageIndex ? 'active' : ''}`} 
                        key={thumbnail.key} src={thumbnail.url} alt={thumbnail.name} 
                        onClick={() => setCurrentImageIndex(index)}
                    />
                )
            })}
        </div>
        </div>
    )
}

export default ImageGallery