import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems(prevItems => {
            // Check if item already exists in the cart
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                // Increase quantity
                return prevItems.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            // Add new item
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems(prevItems => prevItems.map(i => 
            i.id === itemId ? { ...i, quantity } : i
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
