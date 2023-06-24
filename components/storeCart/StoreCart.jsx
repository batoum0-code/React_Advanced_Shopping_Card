import React from 'react'
import './StoreCart.css'
import { StoreItems } from '../../data/StoreItems'
import { UseStoreCart } from '../../context/StoreCartContext'


import Card from '../card/Card'
const StoreCart = () => {

    const { IDS ,getTotalPrice } = UseStoreCart();
  
    const totalPrice = getTotalPrice();
  


  return (
    <div className='storeCartContainer'>
      <div className='total-price'>
        <h1> this is your totatl price { totalPrice } $</h1>
      </div>
   {
  StoreItems.filter(item => IDS.includes(item.id)).map(item => (
    <Card product={item} key={item.id} />
  ))
}
    </div>
  )
}

export default StoreCart