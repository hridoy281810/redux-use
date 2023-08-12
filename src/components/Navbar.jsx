import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = useSelector((state)=> state.cart)
    return (
        <div className='flex justify-start items-center gap-10 py-6 px-20'>
            <span className='logo text-2xl font-semibold'>REDUX STORE</span>
            <div className='flex justify-start items-center  gap-10'>
                <Link className='navLink text-xl font-semibold' to="/">Home</Link>
                <Link className='navLink text-xl font-semibold' to="cart">Cart</Link>
            <span className='cartCount text-xl font-semibold'>Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;