import React from "react";

import AboutContent from "./AboutContent";
import AboutRating from "./AboutRating";

import aboutStyles from "./About.module.css"
import ratingStyles from "./AboutRating.module.css";

const About = () => {
    return (
       <div className={aboutStyles['container']}>
      
       <AboutContent heading={"ORIGINAL ARTWORK"} content={"  Lorem ipsum dolor sit amet consectetur, adipisicing elit."}></AboutContent>
       <div>
        <p className={ratingStyles.heading}>RATING</p>
       <ul style={{listStyleType: "none"}}>
       <AboutRating logo={"https://www.comicsense.store/storage/2022/12/amazon-a-logo-icon.svg"} name={"amazon"} number={4.3}></AboutRating>
       <AboutRating logo={"https://www.comicsense.store/storage/2022/12/flipkart-icon.svg"} name={"flipkart"} number={4.8}> </AboutRating>
       </ul>
       </div>
       
       
       <AboutContent heading={"SINCE 2016"} content={"Lorem ipsum, dolor sit amet consectetur. \n adipisicing elit. Porro repellat nesciunt quos!"}></AboutContent>
       <AboutContent heading={"READY TO SHIP"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni sint. Id ab inventore cumque!"}></AboutContent>
       </div>
    )
}

export default About;