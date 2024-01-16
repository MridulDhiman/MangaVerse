import React from 'react';

import styles from "./ItemContent.module.css";
import ItemContentSocials from './ItemContentSocials';
import ItemAccordionContainer from './ItemAccordionContainer';

const ItemContent = ({item}) => {

let discount = Math.round(((item.discountedPrice - item.price) / item.discountedPrice) * 100);

  return (
    <div className={styles.content}>
        
    <p>{item.name}</p>
    <div className={styles.priceContainer}>
    <span className={styles.actualPrice}>
      {" "}
      $ {item.price}
    </span>{" "}
    <span className={styles.discountedPrice}>
      {" "}
      {item.hasDiscount && (
        <s>$ {item.discountedPrice}</s>
      )}
    </span>
    {item.hasDiscount && <div className={styles.discount}>
                   {discount}% OFF
            </div>}
    </div>
      
      <p className={styles.offer}>1st Order: Use code “First10” & get Flat 10% Off</p>
      <div className={styles.badgeContainer}>
        <img src="https://comicsense.b-cdn.net/storage/2022/10/trust_badge_india.jpg" alt="made-in-india" />
        <img src="https://comicsense.b-cdn.net/storage/2022/11/trust_badge_free_shipping.jpg" alt="free-shipping"/>
      </div>
      <hr className='' />
      <ItemContentSocials/>
      <ItemAccordionContainer/>
  </div>
  )
}

export default ItemContent