import React from 'react'
import './Card.css';
import { UseStoreCart } from '../../context/StoreCartContext';
const Card = (props) => {


    
        const {cartItems, AddItemToCart ,getItemQuantity ,decreaseCartItems ,RemoveFromCart ,IDS ,RemoveItemFromCart} = UseStoreCart();
        const {id , name , price ,imgUrl} = props.product;
        const quantity = getItemQuantity(id) ;
    return (
        <div className="ca">
          <img src={imgUrl} alt="Product Image" />
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <div className="quantity">
            <button onClick={ () => decreaseCartItems(id)}>-</button>
            <input type="number" min="1" value={quantity} readOnly />
            <button onClick={() => AddItemToCart(id)}>+</button>
          </div>
          <button onClick={ () => RemoveItemFromCart(id)} >Remove</button>
        </div>
      );
}

export default Card