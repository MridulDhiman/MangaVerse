import React from "react";

import AboutContent from "./AboutContent";
import AboutRating from "./AboutRating";

import aboutStyles from "./About.module.css"
import ratingStyles from "./AboutRating.module.css";

const About = () => {
    return (
       <div className={aboutStyles['container']}>
       <AboutContent heading={"ORIGINAL ARTWORK"} content={"Designs made by artists from around the world and not google."}></AboutContent>
       <div>
        <p className={ratingStyles.heading}>RATING</p>
       <ul style={{listStyleType: "none"}}>
       <AboutRating logo={"https://www.comicsense.store/storage/2022/12/amazon-a-logo-icon.svg"} name={"amazon"} number={4.3}></AboutRating>
       <AboutRating logo={"https://www.comicsense.store/storage/2022/12/flipkart-icon.svg"} name={"flipkart"} number={4.8}> </AboutRating>
       </ul>
       </div>
       <AboutContent heading={"SINCE 2016"} content={"Making sugoi anime merch since 2016. \nWatching anime since birth (kind of)."}></AboutContent>
       <AboutContent heading={"READY TO SHIP"} content={"One of the fastest shipping time in the industry as all products are already in stock and not made on order."}></AboutContent>
       </div>
    )
}

export default About;