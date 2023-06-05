import React from 'react'
import Navbar from '../navbar'
import Footer from '../Footer'
import CartComponent from '../CartComponent'

function Cart({cartItems, removeItem}) {
    return (
        <>
        <Navbar />
        <CartComponent cartItems={cartItems} removeItem={removeItem}/>
        <Footer />
        </>
    )
}

export default Cart