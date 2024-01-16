import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AddToCart.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemToCart } from "../../../http";
import { useDispatch } from "react-redux";

import { addItemToCart as addItemToReduxCart } from "../../../store/slices/cart";
import { openDrawer } from "../../../store/slices/cartDrawer";

export default function AddToCart({ item }) {

const queryClient = useQueryClient();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const {mutate} = useMutation({
    mutationFn: (data) => addItemToCart(data),
    onMutate: async (data) => {
         addItemToReduxCart(data);       
   await queryClient.cancelQueries({queryKey: ['cart'], exact: true});
   const prevData = queryClient.getQueryData(['cart']);
   return prevData;
    },

    onSettled: () => {
  queryClient.invalidateQueries(['cart']); 
    },
    onSuccess: () => {
      window.scrollTo(0,0);
      dispatch(openDrawer());
      console.log("added to cart successfully");
    },
    onError : (error, data, context) => {
      console.log("unsuccesfull mutation")
queryClient.setQueryData(['cart'], context);
    }
  });

  let inStock = !item.isSoldOut;

  const addToCartHandler = () => {
    const data = {
          product: item._id,
          quantity: count
    };

mutate(data);

  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "just", stiffness: 400 }}
      className={styles.container}
    >
      <div className={styles.priceContainer}>
        <div>
          <span className={styles.actualPrice}>
            {" "}
            &#8377; {item.price?.toFixed(2)}
          </span>{" "}
          <span className={styles.discountedPrice}>
            {" "}
            {item.hasDiscount && (
              <s>&#x20B9;{item.discountedPrice?.toFixed(2)}</s>
            )}
          </span>
        </div>
        {inStock ? <p className={styles.inStock}>IN STOCK</p> : <></>}
      </div>

      <div className={styles.rightSide}>
        <div className={styles.itemQuantity}>
          <button
            onClick={() => {
              setCount((prev) => {
                if (prev === 1) {
                  return prev;
                }

                return prev - 1;
              });
            }}
            className={styles.qtyBtn}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className={styles.qtyBtn}
          >
            +
          </button>
        </div>
        <button onClick={addToCartHandler} className={styles.btn}>ADD TO CART</button>
      </div>
    </motion.div>
  );
}
