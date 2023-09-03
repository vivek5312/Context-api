import React,{useContext} from 'react'
import { CartContext } from './Context'
const Cart = () => {
    const cart=useContext(CartContext)
    const total=cart.Item.reduce((a,b)=>a+b.price,0)
  return (
    <div >
        <h1>Cart</h1>
    {
        cart && cart.Item.map((item)=>(<li>{item.name} - Rs{item.price}</li>
        ))
    }
    <h5>Total Bill: Rs{total}</h5>
    </div>
  )
}

export default Cart
