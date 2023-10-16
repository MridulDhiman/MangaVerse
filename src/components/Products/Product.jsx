import React from 'react'

import ProductCarousel from "./ProductCarousel";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import Related from './Related'

export default function Product() {
  return (
    <div>
        <ProductCarousel/>
        <ProductInfo/>
        <Related/>
        <ProductReviews/>
    </div>
  )
}
