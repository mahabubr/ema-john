import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart, clearCart } = props

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (let product of cart) {
        quantity += product.quantity
        total += product.price * product.quantity
        shipping += product.shipping
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : {tax}</p>
            <h4>Grand Total : {grandTotal}</h4>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;