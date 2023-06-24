import React from 'react'
import './Product.css'
import { UseStoreCart } from '../../context/StoreCartContext'

const Product = (props) => {
    // the props from our store
    const {id , name , price ,imgUrl} = props.product;
    
    // the function that providing from the storeCartContext
    const { AddItemToCart ,getItemQuantity , decreaseCartItems ,RemoveQuantityFromCart } = UseStoreCart();
    
    /// sample handling 
    const quantity = getItemQuantity(id) ;
    
return (
    <div className='card-container' key={id}>
    <div className='card' >
        <div className='img-card'>
            <img src={imgUrl} alt='product-photo'/>
        </div>
        <div className='card-details'>
            <h2>{name}</h2>
            <p><span>$</span>{price}</p>
        </div>
        
        {
            quantity === 0 ? <button className='start-add-button' onClick={()=> AddItemToCart(id)}>Add To Cart</button> :<> <div className='buttons'>
            <button className='minus' onClick={() => decreaseCartItems(id)}>-</button>
            <span className='qte'>{quantity} </span> <span>   in cart</span>
            <button className='plus' onClick={()=> AddItemToCart(id)}>+</button>
            </div>
            <button className='remove-btn' onClick={ () => RemoveQuantityFromCart(id)}>Remove</button>
        </>
        }
    </div>
    </div>
  )
}



export default Product