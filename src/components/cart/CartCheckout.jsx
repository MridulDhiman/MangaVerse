import React, { useEffect, useState } from 'react'

import styles from "./CartCheckout.module.css"
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {  emptyCart } from '../../http';

const CartCheckout = ({data}) => { 

  const queryClient = useQueryClient();
const [checkoutData, setCheckoutData] = useState([]);
const [subTotal, setSubTotal] = useState(0);
const {mutate:mutateCart}  = useMutation({
  mutationFn: emptyCart,
  onMutate: async () => {

    await queryClient.cancelQueries({queryKey: ['cart'], exact: true});
    const prevData = queryClient.getQueryData();

    return prevData;
  },
  onSuccess: () => {
queryClient.invalidateQueries({queryKey: ['cart'], exact: true});
  },

  onError: (error, data, context) => {
    queryClient.setQueryData(['cart'], context);
  }

});
const {mutate} = useMutation({
  mutationFn: (data) => checkoutCart(data),

  onSuccess: () => {
    // empty the cart
    mutateCart();
  },

  onError: () => {
    window.alert("Checkout unsucccessful");
  }
})



useEffect(()=> {

  if(data.length > 0) {


    for(let item of data) {
      const {_id, product, quantity} = item;
      console.log(_id, product,quantity)
      setSubTotal((prev) => {
            const new_state = prev + (product.price * quantity);
            // console.log("new state: ", new_state);
            return new_state;
      });
      setCheckoutData((prev) => {
        const new_state = [...prev, {
          id: _id,
          name: product.name,
          price: product.price,
          quantity: quantity,
        }];

        return new_state;
      })
      }
  }

 
}, [data]);



  const checkoutHandler = () => {
if(data.length === 0) {
  window.alert("No items to checkout...");
}
    if(data.length > 0) {
      // console.log(checkoutData);
      // mutate(checkoutData);
    }
  }

  
  let total = subTotal - 25;
  if(subTotal < 25) {
    return <></>
  } 

  return (
    <div className={styles.container}>
        <p className={styles.heading}>Cart Totals</p>
        <div className={styles.checkOutItem}>
          <p>Subtotal: </p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <div className={styles.checkOutItem}>
          <p>Shipping Costs: </p>
          <p>$5.00</p>
        </div>
        <div className={styles.checkOutItem}>
          <p>Discount: </p>
          <p>-$20.00</p>
        </div>
        <div className={styles.total}>
          <p>Total: </p>
          <p style={{fontWeight:'600'}}>${total.toFixed(2)}</p>
        </div>
        <button onClick={checkoutHandler} className={styles.btn}>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default CartCheckout