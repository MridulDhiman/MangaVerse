import React from 'react'
import styles from "./CartDrawerFooter.module.css";
import { useNavigate } from 'react-router-dom';

const CartDrawerFooter = ({subTotal, onClose}) => {
  
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <div className={styles.subTotal}>
            <p>SUBTOTAL: </p>
            <p>
            <span className={styles.actualPrice}>
      {" "}
      &#8377; {subTotal}
      </span>
            </p>
            
    
        </div>
        <div className={styles.btnContainer}>
            <button onClick={()=>{
                onClose();
                 navigate("/cart");    
                 }} className={styles.btn}>VIEW CART</button>
        </div>
    </div>
  )
}

export default CartDrawerFooter