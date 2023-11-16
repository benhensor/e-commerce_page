import React, { useState, useRef, useEffect } from 'react'
import { ReactComponent as Close } from '../assets/icon-close.svg';
import { ReactComponent as Next } from '../assets/icon-next.svg';
import { ReactComponent as Previous } from '../assets/icon-previous.svg';
import '../styles/imagepopout.css'

const ImagePopout = ({ 
    images,
    thumbnails,
    setIsPopout,
}) => {

    const popoutRef = useRef(null)

    const [currentPopoutImageIndex, setCurrentPopoutImageIndex] = useState(0)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoutRef.current && !popoutRef.current.contains(event.target)) {
                setIsPopout(false);
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsPopout]);

    const handleClose = () => {
        setIsPopout(false)
    }

    const handlePopoutNext = () => {
        setCurrentPopoutImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePopoutPrevious = () => {
        setCurrentPopoutImageIndex((prevIndex) => {
        if (prevIndex === 0) {
            return images.length - 1
        }
        return prevIndex - 1
        })
    }

    const currentImage = images[currentPopoutImageIndex]

    return (
        <div ref={popoutRef} className='popout-container'>
            <div className='popout-position'>
                <div className='popout-image-container'>
                        <button className='popout-close' onClick={handleClose}><Close /></button>
                        <img className='popout-display' src={currentImage.url} alt={currentImage.name}/>
                        <button className='popout-previous' onClick={handlePopoutPrevious}><Previous /></button>
                        <button className='popout-next' onClick={handlePopoutNext}><Next /></button>
                    <div className='popout-thumbnails-container'>
                        {thumbnails.map((thumbnail, index) => {
                            return (
                                <img 
                                    className={`popout-thumbnail ${index === currentPopoutImageIndex ? 'active' : ''}`} 
                                    key={thumbnail.key} src={thumbnail.url} alt={thumbnail.name} 
                                    onClick={() => setCurrentPopoutImageIndex(index)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagePopout