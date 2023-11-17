import React, { useState } from 'react'
import CartPreview from './CartPreview'
import { useCart } from '../context/Cart'
import { ReactComponent as Menu } from '../assets/icon-menu.svg'
import { ReactComponent as Close } from '../assets/icon-close.svg'
import { ReactComponent as Cart } from '../assets/icon-cart.svg'
import '../styles/header.css'

export function Header() {

    const { cartItems } = useCart()

    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    const [cartOpen, setCartOpen] = useState(false)

    const tabs = [
        'Collections',
        'Men',
        'Women',
        'About',
        'Contact'
    ]

    return (
        <header>
            <div className='header-container'>
                <div className='header-logo-nav-container'>
                <button className='header-menu-controls' onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <Menu className='icon-menu'/> : <Close className='icon-close'/>}
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
                        <Cart className='icon-cart'/>
                        <p className='header-cart-quantity'>{cartItems.length}</p>
                    </button>
                    {cartOpen && (
                        <CartPreview />   
                    )}
                    <div className='header-account'>
                        <img src="images/image-avatar.png" alt="Avatar" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header