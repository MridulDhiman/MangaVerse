import React from "react";

import InfiniteCarousel  from "react-leaf-carousel";

import sliderStyles from "./Carousel.module.css";

const Carousel = () => {
    return (
      <div className={sliderStyles.carousel}>
<InfiniteCarousel 
  style={{position:"absolute"}}
    showSides={true}
    sideSize={.3}
    slidesToScroll={1}
    slidesToShow={3}
    scrollOnDevice={true}
    slidesSpacing={0}
    autoCycle={true}

    > 
        <div><img className={sliderStyles['slide']} src="carousel_1.jpg" alt="" /></div>
        <div><img className={sliderStyles['slide']} src="carousel_2.jpg" alt="" /></div>
        <div><img className={sliderStyles['slide']} src="carousel_3.jpg" alt="" /></div>
        <div><img className={sliderStyles['slide']} src="carousel_4.jpg" alt="" /></div>
    </InfiniteCarousel>
      </div>
  
      
    )
}

export default Carousel;