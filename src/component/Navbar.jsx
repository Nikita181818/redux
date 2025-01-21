import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items=useSelector((state)=>(
        //saari state  useSelector ke paas rehti hainn jaise store ke paas saare reducer set kiye jaate hain hame batana pdta haqi hame konsi state chahiye
      state.cart
    ))
  return (
    <div className="navbar-container">
      <span>Redux</span>
      <div className="navbar-right">
        <div className="nav-links">
          <Link className='navLink' to={'/'}>Home</Link>
          <Link className='navLink' to={'/cart'}>Cart</Link>
        </div>
        <span>items: {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar
