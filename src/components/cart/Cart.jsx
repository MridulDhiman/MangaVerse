import React, { useState } from "react";

import styles from "./Cart.module.css";
import CartItems from "./CartItems";
import CartCheckout from "./CartCheckout";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../LoadingSkeleton";
import { getCartItems } from "../../http";
import { useQuery } from "@tanstack/react-query";

const Cart = () => {
const data = useSelector((state) => state.cart.items);
// const {data, isPending} = useQuery({
// queryKey: ['cart'],
// queryFn: getCartItems,
// });


let initialCart = [];


  for(let item of data) {
    const x = {
     id: item._id,
     quantity: item.quantity
    };
    initialCart.push(x);
}




  return (
    <>
  
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <p>Product</p>
            <div className={styles.containerRight}>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
          </div>

          {
            data && data.length> 0 &&  <CartItems  initialCart={initialCart} items={data}/>
          }
          {
            data && data.length === 0 && <p style={{marginTop: "1rem", fontSize: "1rem"}}>No Products in the cart</p>
          }
     
        </div>

       { data && <CartCheckout key={data} data={data}/>}
       
      </div>
    </>
  );
};

export default Cart;
