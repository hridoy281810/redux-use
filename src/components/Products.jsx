import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()
        console.log(data)
        setProducts(data)
        }
        fetchProducts();
    },[])

    const handleAddToCart =(product) =>{
          dispatch(add(product))
    }
    return (
        <div className='grid grid-cols-3 gap-4'>
           {
            products.map(product => (
                <div key={product.id} className=''>
<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img style={{height: '300px', width: '300px'}} src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
   <div className='grid grid-cols-2'>
   <p>category: {product.category}</p>
    <p>price: {product.price} $</p>
    <p>rating: {product.rating.rate} </p>
    <p >count: {product.rating.count} </p>
   </div>
    <div className="card-actions justify-center">
      <button onClick={()=> handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
                </div>
            ))
           }
        </div>
    );
};

export default Products;