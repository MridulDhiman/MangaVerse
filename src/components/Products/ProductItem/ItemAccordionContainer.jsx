import React from 'react'
import ItemAccordion from './ItemAccordion'

import styles from './ItemAccordionContainer.module.css';

const ItemAccordionContainer = () => {
  return (
    <div className={styles.container}>
        <ItemAccordion desc={"Product Description"}/>
        <ItemAccordion desc={"Shipping & Return Info."}/>
        <ItemAccordion desc={"Offers"} />
    </div>
  )
}

export default ItemAccordionContainer