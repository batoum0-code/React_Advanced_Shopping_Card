import {  createContext, useContext } from "react";
import { useState  } from "react";
import { StoreItems } from "../data/StoreItems";

// create context ;
const StoreContext = createContext({}); 


// global context provider function
const StoreCartProvider = ({children}) => {

  const [ cartItems , setCartItems] = useState([]);
  
  // function to get the item quantity
  const getItemQuantity = (id) => {
  return cartItems.find( (item)=>item.id === id)?.quantity || 0;
  }
  // function to Add item to cart

  const AddItemToCart = (id) => {
  setCartItems(
    (prev) => {
      if(prev.find( (item)=>item.id===id)==null){
      return [...prev , { id , quantity: 1}];
      }
      else{
        return prev.map( (item)=> {
          if(item.id === id){
            return {...item, quantity: item.quantity + 1};
          }else { return item }
        })
      }
    }
  )
  }

  
  // function to decrease cart items
  const decreaseCartItems = (id) => {
    setCartItems( (prev) => {
      return prev.map( (item)=> {
        if(item.id === id){
          return {...item , quantity: item.quantity - 1}
        }
        else return item ;
    }
    )
    }
    )
  }
  
  /* this function to return each item's quantity to zero in one click 
  don't forget to remark that you can do this function with the filter function to return all the objects inside CartItems with out 
  the objects that you want remove it from shopping cart and that will useful in other logics so just be car full with the logic you used */

  const RemoveQuantityFromCart = (id) => {
    setCartItems( (prev) => {
    return  prev.map( (item) => {
      if( item.id === id){
        return { id , quantity:0}
      }
      })
    })
  }

  // remove item from cart using element id

  const RemoveItemFromCart = ( id )  => {
    setCartItems( (prev)=> prev.filter(item=> item.id !== id));
  }

  /// function return items id from carItems

  const IDS = cartItems.map( ( item)=> {
    return item.id;
});

   // function to get the total quantity

  const getItemQuantityTotal = () => {
    let sum = 0;
    cartItems.forEach( ( e) => {
      sum += e.quantity;
    });

    return sum;
};

// function to get the total price of all products in the shopping cart 

  const getTotalPrice = () => {
  let totalPrice = 0;

  cartItems.forEach((element) => {
    const item = StoreItems.find((data) => data.id === element.id);
    if (item) {
      totalPrice += item.price * element.quantity;
    }
  });

  return totalPrice;
};
  
  
  return (

    <StoreContext.Provider value={
      {
        cartItems, AddItemToCart ,getItemQuantity ,decreaseCartItems ,RemoveQuantityFromCart ,IDS,RemoveItemFromCart
        ,getItemQuantityTotal ,getTotalPrice
      }
    }>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreCartProvider;

// to export the use context 
export const UseStoreCart = () => useContext(StoreContext);
