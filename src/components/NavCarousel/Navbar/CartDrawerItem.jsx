import React from 'react'

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import styles from "./CartDrawerItem.module.css"
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
const CartDrawerItem = ({item: { product, quantity}, onClose}) => {
  const navigate = useNavigate();

  
  return (
    <div className={styles.container}>
        <div>
<img src={`/${product.initialImage}`} className={styles.img} alt={product.slug}/>

        </div>
        <div className={styles.right}>
<h5>{product.name} {quantity > 0 ? `x ${quantity}`: ""}</h5>

            <div className={styles.iconContainer}>
            <span className={styles.actualPrice}>
            {" "}
            $ {product.price.toFixed(2)}
            </span><br/>
           
                <IconContext.Provider value={{className: `${styles.icon}`}}>
                <FaEdit onClick={()=>{ onClose();navigate("/cart")}}/>
                <MdDeleteOutline onClick={() =>{ onClose();navigate("/cart")}}/>
                </IconContext.Provider>
                
          
            </div>


        </div>

    </div>
  )
}

export default CartDrawerItem