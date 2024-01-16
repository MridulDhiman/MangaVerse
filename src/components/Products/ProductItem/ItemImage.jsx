import React from 'react'


import styles from "./ItemImage.module.css";
const ItemImage = ({item}) => {
  return (
    <div className={styles.imgContainer} >
    <img className={styles.img} src={`/${item.initialImage}`} alt={item.slug} />
  </div>
  )
}

export default ItemImage;