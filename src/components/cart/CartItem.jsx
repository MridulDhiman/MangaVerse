import React, { useState } from "react";

import styles from "./CartItem.module.css";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../../http";
import { removeItemFromCart } from "../../store/slices/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item: {_id, product, quantity }, incCount, decCount}) => {
  const [count, setCount]  = useState(quantity);
  const [startedToPatch, setStartedToPatch] = useState(false);
  const queryClient = useQueryClient();
  const dispatch =useDispatch();
  const {mutate} = useMutation({
    mutationFn: () => deleteCartItem(_id, product._id),
    onMutate: async () => {
      dispatch(removeItemFromCart({
        id: _id
      }));
await queryClient.cancelQueries();
const prevData = queryClient.getQueryData(['cart']);
return prevData;
    },
    onSettled: () => {
          queryClient.invalidateQueries({queryKey: ['cart'], exact: true})
    },
    onError: (error, data, context) => {
        queryClient.setQueryData(['cart'], context);
    }
  })
  const subTotal = product.price * count;



  const incHandler = () => {
    setStartedToPatch(true);
    setCount(count+1);
    incCount(_id);
  }
const decHandler = () => {
  setStartedToPatch(true);
  setCount((prev) => {
    if(prev == 1) {
      return prev;
    }
    return prev - 1;
  });
  decCount(_id);
}


  const deleteHandler = () => {
    const flag = window.confirm("Are you sure?");
    if(flag) {
      mutate();
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.productContent}>
        <img
          className={styles.img}
          src={`/${product.initialImage}`}
          alt={product.slug}
        />
        <div className={styles.actualContent}>
          <p>{product.name}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.containerMiddle}>
        <div className={styles.quantity}>
          <button onClick={decHandler} className={styles.btn}>
            <IconContext.Provider value={{ className: `${styles.icon}` }}>
              <FaMinus />
            </IconContext.Provider>
          </button>
          <p>{!startedToPatch ? `${quantity}` : `${count}`}</p>
          <button onClick={incHandler} className={styles.btn}>
            <IconContext.Provider value={{ className: `${styles.icon}` }}>
              <FaPlus />
            </IconContext.Provider>
          </button>
        </div>
        <div className={styles.subTotal}>
          <p>${subTotal.toFixed(2)}</p>
          <button onClick={deleteHandler} className={styles.btn}>
            <IconContext.Provider value={{ className: `${styles.icon}` }}>
              <MdDelete />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
