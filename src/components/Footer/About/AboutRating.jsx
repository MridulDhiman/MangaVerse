import React from "react";

import ratingStyles from "./AboutRating.module.css"
const AboutRating = ({logo, name, number})=> {
    const rating = <div className={ratingStyles.rating}><img className={ratingStyles.ratingLogo} src={logo} alt={name}/> <span className={ratingStyles.ratingText}>{number}/5.0</span>  </div>;
    return (
       <li>
         {rating}
       </li>
      
       
    )
}

export default AboutRating;