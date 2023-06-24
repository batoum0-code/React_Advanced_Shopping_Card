import React from 'react'
import logo from '../../assets/images.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { UseStoreCart } from '../../context/StoreCartContext'
import { useState ,useEffect } from 'react'
const Navbar = () => {

  const {getItemQuantityTotal ,cartItems} = UseStoreCart();

  const [totalItems, setTotalItems] = useState(0);
  
  // you can do this without useEffect but use effect is the right way or also use memo ...

  useEffect(() => {
    setTotalItems(getItemQuantityTotal());
  }, [cartItems]);

  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
        
      </div>
      <div className='nav-items'>
        <Link to='/' className='link ho'>Home</Link>
        <Link to='/store' className='link st'>Store</Link>
        <Link to='/cart'className='link ab'>Cart ({totalItems})</Link>
        <Link to='/about'className='link ab'>About</Link>
      </div>
    </div>
  )
}

export default Navbar;