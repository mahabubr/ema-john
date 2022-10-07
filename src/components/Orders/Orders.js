import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteShoppingCart, removeFromDb} from '../../utilities/fakedb'

const Orders = () => {

    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining) 
        removeFromDb(id)
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="orders-container">
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem} />)
                    }
                    {
                        cart.length === 0 && <h2>Not Found Any Product</h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart clearCart={clearCart} cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Orders;