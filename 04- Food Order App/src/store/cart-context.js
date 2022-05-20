import React, { createContext, useContext } from "react";

const CartContext = createContext({
    
}) 

const CartContextProvider = (props) => {
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;