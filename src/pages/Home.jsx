import React, { useEffect, useState } from 'react';
import './Home.css'; // Assuming the CSS is in this file
import {add} from '../redux/Cartslice'
import {useDispatch} from 'react-redux'
//dispatch function help krta hai ki saare actions mei se konsa action dispatch knrna hai

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  const handleadd=(product)=>{
    dispatch(add(product));
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={()=>handleadd(product)}>Add to Cart</button>
          
        </div>
      ))}
    </div>
  );
};

export default Home;
