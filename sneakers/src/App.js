import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductsPage from './components/ProductsPage'
import Footer from './components/Footer'
import fetchProductInformation from './api/fetchProductInformation'
import { CartProvider } from './context/Cart'
import './styles/app.css'

function App() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchProductInformation()
                setProducts(data)
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

    return (
        <main className="app">
            <CartProvider>
                    <Header />
                    <ProductsPage products={products} />
                    <Footer />
            </CartProvider>
        </main>
       
    );
}

export default App
