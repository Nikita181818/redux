import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'; // Assuming the CSS is saved in a file named Cart.css
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Cartslice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const handleremove=(id)=>{
    dispatch(remove(id));
  }

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
         
        <h3>Your cart is empty</h3>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h5 className="title">{item.title}</h5>
              <h5 className="price">${item.price}</h5>
              <button className='btn' onClick={() => handleremove(item.id)}> Remove from cart</button>

            </div>
          </div>
        ))
      )}
   
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Subtotal</h3>
          <div className="total-price">
            ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
