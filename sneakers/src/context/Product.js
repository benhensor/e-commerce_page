import React, { createContext, useState, useMemo } from 'react'
import ProductInformation from '../products.json'

export const Product = createContext()

export const ProductProvider = ({ children }) => {

    const [images, setImages] = useState(ProductInformation.images)
    const [thumbnails, setThumbnails] = useState(ProductInformation.thumbnails)
    const [name, setName] = useState(ProductInformation.name)
    const [company, setCompany] = useState(ProductInformation.company.toUpperCase())
    const [description, setDescription] = useState(ProductInformation.description)
    const [price, setPrice] = useState(ProductInformation.price)
    const [discount, setDiscount] = useState(ProductInformation.discount)
    const [oldPrice, setOldPrice] = useState(ProductInformation.oldprice)

    const value = useMemo(() => ({ 
        images, 
        setImages,
        thumbnails, 
        setThumbnails,
        name, 
        setName,
        company, 
        setCompany,
        description, 
        setDescription,
        price, 
        setPrice,
        discount, 
        setDiscount,
        oldPrice, 
        setOldPrice
    }), [images, setImages, thumbnails, setThumbnails, name, setName, company, setCompany, description, setDescription, price, setPrice, discount, setDiscount, oldPrice, setOldPrice])

    return (
        <Product.Provider value={value}>
            {children}
        </Product.Provider>
    )
}