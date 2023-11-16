import React from 'react'
import ProductItem from './ProductItem'

const ProductPage = ({ product }) => {

    if (!product) {
        return <p>Loading...</p>
    }

    const { images, thumbnails, title, company, description, price, discount, oldprice } = product    

    return (
        <section className='product-page'>
            <ProductItem 
                images={images}
                thumbnails={thumbnails}
                title={title}
                company={company}
                description={description}
                price={price}
                discount={discount}
                oldPrice={oldprice}
            />
        </section>
    )
}

export default ProductPage