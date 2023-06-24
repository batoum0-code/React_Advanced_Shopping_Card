import React from 'react'
import './Store.css'
import Product from '../product/Product'
import {StoreItems} from '../../data/StoreItems'
const Store = () => {
  return (
    <div className='store-container'>
      <h1>New Store with other methods</h1>
      <div className='items-container'>
        {
          StoreItems.map( (product)=>(
            <Product product={product} key={product.id}/> 
          ))
        }
      </div>
    </div>
  )
}

export default Store;