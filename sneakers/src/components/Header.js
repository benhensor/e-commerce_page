import React, { useState, useEffect, useContext } from 'react'
import { CountContext } from '../context/Count'
import '../styles/header.css'
import '../styles/cartpreview.css'

export function Header() {

    const { count } = useContext(CountContext)

    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    const [cartOpen, setCartOpen] = useState(false)
    const [cartQuanity, setCartQuantity] = useState(0)

    const tabs = [
        'Collections',
        'Men',
        'Women',
        'About',
        'Contact'
    ]

    useEffect(() => {
        setCartQuantity(count)
    }, [count])

    const CartPreviewItem = () => {
        return (
            <div className='cart-item'>
                <img src="images/image-product-1-thumbnail.jpg" alt="Product" />
                <div className='cart-item-detail'>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <p>$125.00 x 1</p>
                </div>
                <button className='cart-item-delete'>
                    <img src="images/icon-delete.svg" alt="Delete" />
                </button>
            </div>
        )
    }

    return (
        <header>
            <div className='header-container'>
                <div className='header-logo-nav-container'>
                <button className='header-menu-controls' onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <img src="images/icon-menu.svg" alt="Hamburger Menu" /> : <img src="images/icon-close.svg" alt="Close Menu" />}
                </button>
                <img className='header-logo' src="images/logo.svg" alt="Sneakers logo" />
                <nav className={`header-navbar ${isOpen ? 'visible' : ''}`}>  
                    <ul>
                        {tabs.map((tab) => {
                            return (
                                <li key={tab}>
                                    <button onClick={() => {setActiveTab(tab); setIsOpen(!isOpen)}}
                                            className={tab === activeTab ? 'active' : ''}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                </div>
                <div className='header-user'>
                    <button className='header-cart' onClick={() => setCartOpen(!cartOpen)}>
                        <img src="images/icon-cart.svg" alt="Shopping Trolley" />
                        <p className='header-cart-quantity'>{cartQuanity}</p>
                    </button>

                    <div className={`cart-preview ${cartOpen ? 'open' : ''}`}>
                        <h3 className='cart-header'>Cart</h3>
                        <hr />
                        <div className='cart-content'>
                            <CartPreviewItem />
                            <CartPreviewItem />
                            <CartPreviewItem />
                        </div>
                        <div className="cart-footer">
                            <button className='cart-checkout'>Checkout</button>
                        </div>
                    </div>

                    <div className='header-account'>
                        <img src="images/image-avatar.png" alt="Avatar" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header