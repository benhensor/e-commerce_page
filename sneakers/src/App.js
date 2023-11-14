import React from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import ProductInformation from './products.json'
import { CountProvider } from './context/Count'
import './styles/app.css'

function App() {

    const images = ProductInformation.images
    const name = ProductInformation.name
    const company = ProductInformation.company.toUpperCase()
    const description = ProductInformation.description
    const price = ProductInformation.price
    const discount = ProductInformation.discount
    const oldPrice = ProductInformation.oldprice

    const count = 0


    return (
        <main className="app">
            <CountProvider>
                <Header count={count}/>
                <ProductPage 
                    images={images}
                    name={name}
                    company={company}
                    description={description}
                    price={price}
                    discount={discount}
                    oldPrice={oldPrice}
                />
                <Footer />
            </CountProvider>
        </main>
       
    );
}

export default App
