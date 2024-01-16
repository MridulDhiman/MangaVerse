import React from 'react'

import categoriesFilterStyles from "./TopCategoriesFilter.module.css";

export default function TopCategoriesFilter() {
  const items = ['Oversized Tees', "Shirts", "Hoodies/Jackets", "Body Pillow Covers", "Figurines", "Manga", "Wall Decor", "Sticker"];

  const itemlist = items.map((item, index) => {
    return<>
         <div key={index} className={categoriesFilterStyles.item}><span className={categoriesFilterStyles.itemText}>{item}</span></div>
         <hr className={categoriesFilterStyles.line} />
    </>
  })
  return (
    <div className={categoriesFilterStyles.filters}>
       {itemlist}
      <div key={items.length} className={categoriesFilterStyles.item}><span>Cosplay</span></div>
    </div>
  )
}
