import { createContext,useState } from "react";

export const CartContext=createContext(null)

const CartProvider=(props)=>{
    const [Item,setItem]=useState([])
    return(
        <CartContext.Provider value={{Item,setItem}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;