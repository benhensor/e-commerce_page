import React from 'react'
import ProductItem from './ProductItem'
import '../styles/productspage.css'

const ProductsPage = ({ products }) => {

    if (!products) {
        return <p>Loading...</p>
    }  

    return (
        <section className='products-page'>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    images={product.images}
                    thumbnails={product.thumbnails}
                    title={product.title}
                    company={product.company}
                    description={product.description}
                    price={product.price}
                    discount={product.discount}
                    oldPrice={product.oldprice}
                />
            ))}
        </section>
    )
}

export default ProductsPage