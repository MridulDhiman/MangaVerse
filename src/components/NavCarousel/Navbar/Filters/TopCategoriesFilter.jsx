import React from 'react'


import categoriesFilter from "./TopCategoriesFilter.module.css";


export default function TopCategoriesFilter({onMouseOver, onMouseLeave}) {
  return (
    <div className={categoriesFilter["filters"]} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div> <span>Oversized Tees</span></div>
      <hr />
      <div><span>Shirts</span></div>
      <hr />
      <div><span>Hoodies/Jackets</span></div>
      <hr />
      <div><span>Body Pillow Covers</span></div>
      <hr />
      <div><span>Figurines</span></div>
      <hr />
      <div><span>Manga</span></div>
      <hr />
      <div><span>Wall Decor</span></div>
      <hr />
      <div><span>Sticker</span></div>
      <hr />
      <div><span>Cosplay</span></div>
    </div>
    
    
  )
}
