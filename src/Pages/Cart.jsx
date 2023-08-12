import React from 'react';
import Products from '../components/Products';

const Cart = () => {
    return (
        <div className='text-center'>
          <h1>Welcome to the Redux toolkit store</h1>
          <section>
            <h3>Products</h3>
            <Products />
          </section>
        </div>
    );
};

export default Cart;