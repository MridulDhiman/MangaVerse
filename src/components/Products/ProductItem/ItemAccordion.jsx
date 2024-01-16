import React, {useState}from 'react'

import styles from "./ItemAccordion.module.css";

const ItemAccordion = ({desc}) => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className={styles.accordion}
   
    >
       <div
        className={styles.header}
        onClick={()=> setIsOpen((prev) => !prev)}
        style={{background: isOpen ? '#EAEFF3': "white"}}
        >
        <p>{desc}</p>
        <span>{isOpen ? "-" : "+"}</span>
       </div>

       <div>
        {isOpen && <div style={{borderBottom: desc === 'Offers' ? "none": "1px solid black"}} className={styles.main}>
            Hello Everyone
            </div>}
       </div>
    </div>
  )
}

export default ItemAccordion