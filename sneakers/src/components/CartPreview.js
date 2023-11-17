import React from 'react'
import { useCart } from '../context/Cart'
import { ReactComponent as Delete } from '../assets/icon-delete.svg'
import { ReactComponent as Plus } from '../assets/icon-plus.svg'
import { ReactComponent as Minus } from '../assets/icon-minus.svg'
import '../styles/cartpreview.css'

const CartPreview = () => {

    const { cartItems, removeItemFromCart, updateItemQuantity } = useCart()

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    }

    const handleUpdateItemQuantity = (itemId, quantity) => {
        updateItemQuantity(itemId, quantity);
        if (quantity === 0) {
            removeItemFromCart(itemId);
        }
    }

    const handleIncrease = (id) => {
        const item = cartItems.find((item) => item.id === id);
        if (item) {
        handleUpdateItemQuantity(id, item.quantity + 1);
        console.log('clicked')
        }
    }

    const handleDecrease = (id) => {
        const item = cartItems.find((item) => item.id === id);
        if (item) {
        handleUpdateItemQuantity(id, item.quantity - 1);
        console.log('clicked')
        }
    }

    return (

        <div className="cart-preview-container">
            <h3 className='cart-header'>Cart</h3>
            <hr />
            {cartItems.length === 0 ? (
                <div className="cart-preview-empty">
                    <p>Your cart is empty</p>
                </div>
                ) : (
                <>
                {cartItems.map((cartItem) => (
                    <div className='cart-content' key={cartItem.id}>
                        <div className='cart-item'>
                            <img src={cartItem.thumbnails[0].url} alt={cartItem.thumbnails.name} />
                            <div className="cart-detail-align">
                            <div className='cart-item-detail'>
                                <h4>{cartItem.title}</h4>
                                <div className="cart-price-align">
                                    <p>£{cartItem.price}</p>
                                    <div className='cart-quantity-controls'>                          
                                        <Minus onClick={() => handleDecrease(cartItem.id)}/>
                                        <span>{cartItem.quantity}</span>
                                        <Plus onClick={() => handleIncrease(cartItem.id)}/>
                                    </div>                                    
                                </div>
                            </div>
                            <button className='cart-item-delete' onClick={() => handleRemoveItem(cartItem.id)}>
                                <Delete />
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
                <hr />
                <div className='cart-total'>
                    <p>Total</p>
                    <p className='cart-total-price' >£{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                </div>
                <button className='cart-checkout'>Checkout</button>
                </>
            )} 
        </div>

    )
}

export default CartPreview