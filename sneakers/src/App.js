import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import fetchProductInformation from './api/fetchProductInformation'
import { CountProvider } from './context/Count'
import { CartProvider } from './context/Cart'
import './styles/app.css'

function App() {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    const count = 0
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchProductInformation()
                setProduct(data)
            } catch (error) {
                console.error("Failed to fetch product information:", error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Failed to load product information</p>

    console.log('app', product)

    return (
        <main className="app">
            <CartProvider>
                <CountProvider>
                    <Header count={count}/>
                    <ProductPage product={product} />
                    <Footer />
                </CountProvider>
            </CartProvider>
        </main>
       
    );
}

export default App
