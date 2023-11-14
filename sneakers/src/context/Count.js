import React, { createContext, useState, useMemo } from 'react'

export const CountContext = createContext()

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const value = useMemo(() => ({ count, setCount }), [count, setCount])

    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    )
}