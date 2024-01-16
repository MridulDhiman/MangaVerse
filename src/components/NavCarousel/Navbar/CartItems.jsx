import React from 'react'
import CartDrawerItem from './CartDrawerItem'


import styles from "./CartItems.module.css"

const CartItems = ({items, onClose}) => {

  return (
    <div className={styles.container}>
      {
items.map((item) => <CartDrawerItem onClose={onClose} key={item.product._id} item={item}/>)
      }
      
    </div>
  )
}

export default CartItems