import React from 'react'


import ProductFilterType from './ProductFilterType'


import filterStyles from "./ProductFilter.module.css"

export default function ProductFilter({styles}) {
  return (
    <div className={filterStyles.filter} style={styles}>
        <ProductFilterType heading={"Apparel"} content={["Tees", "Baby Tees", "Shirts(kimono shirt)", "Hoodies/Jackets", "Caps & Hats", "Crop Tops"]}/>
        <ProductFilterType heading={"Not Apparel"} content={["Badges", "Body Pillow Covers", "Bookmarks", "Bucket Lists", "Cosplay", "Figurines", "Keychains", "Manga", "Wall Decor", "Sketchbooks", "Sticker", "Tote Bags"]} />
        <ProductFilterType heading={"Deleting Soon"} content={["Boxers", "Bracelets", "Lamps", "Necklace & Pendants", "Socks", "Tank Tops"]}/>
    </div>
  )
}
