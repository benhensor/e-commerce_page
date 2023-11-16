import React from 'react'
import { ReactComponent as Delete } from '../assets/icon-delete.svg'

const CartItem = ({ thumbnail, title, price }) => {
    return (
        <div className='cart-item'>
            <img src={thumbnail.url} alt={thumbnail.name} />
            <div className='cart-item-detail'>
                <h4>{title}</h4>
                <p>{price}</p>
            </div>
            <button className='cart-item-delete'>
                <Delete />
            </button>
        </div>
    )
}

export default CartItem