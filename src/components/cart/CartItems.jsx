import React, { useEffect, useReducer } from "react";
import CartItem from "./CartItem";

import styles from "./CartItems.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCartItems } from "../../http";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../LoadingSkeleton";


const patchReducer = (state, action) => {
// action.id
  if(action.type === 'increment') {
  const new_state =   state.map((item) => {
      if(item.id === action.payload.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item;
     });

     return new_state;
  }


  if(action.type === 'decrement') {
    const new_state = state.map((item) => {
        if(item.id === action.payload.id && item.quantity != 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
      return item;
    });

    return new_state;
  }

  return state;
}
  

const CartItems = ({ items, initialCart }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [patchRequest, dispatchNewRequest] = useReducer(patchReducer, initialCart);
  const {isPending,  mutate: mutatePatch} = useMutation({
    mutationFn: (data) => patchCartItems(data),
   onMutate: async  () => {
await queryClient.cancelQueries({queryKey: ['cart'], exact: true});
const prevData = queryClient.getQueryData(['cart']);
return prevData;
   },
   onSettled: () => {
     queryClient.invalidateQueries({queryKey: ['cart'], exact: true})
     navigate(0);
   },
   onError: (error, data,context) => {
    queryClient.setQueryData(['cart'], context);
   },
  });


  
  const incrementHandler = (id) => {
    dispatchNewRequest({
      type: 'increment',
      payload: {
        id
      }
    })
  };

  const decrementHandler = (id) => {
    dispatchNewRequest({
      type: 'decrement',
      payload: {
        id
      }
    })
  };


  
  const patchRequestHandler = () => {
    if(patchRequest != initialCart && patchRequest.length > 0) {
      mutatePatch(patchRequest);
    }
  }


  const data = items.map((item) => (
    <CartItem incCount={incrementHandler} decCount={decrementHandler} key={item.product._id} item={item} />
  ));
  return<>
 {isPending && <LoadingSkeleton/>} 
  <div style={{width: "100%"}}>
  <div>{data}</div>
  <button disabled={JSON.stringify(patchRequest) === JSON.stringify(initialCart)} onClick={patchRequestHandler} className={styles.btn}  style={{float: "right",marginTop: "1rem",fontFamily: `"Dosis", sans-serif`,border:"none", outline: "none", cursor: "pointer", padding: "0.7rem", borderRadius: "2px", width:"fit-content", background: "#172D3B" ,color: "white", fontWeight: "600"}}>UPDATE CART</button>
  </div> 
  </>

};

export default CartItems;
