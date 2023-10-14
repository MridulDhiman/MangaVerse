import React from "react";
import Socials from "../../Socials/Socials";
import MajorEComLinks from "./MajorEComLinks";

import LinksType from "./LinksType";

import linkStyles from "./Links.module.css"

const LINK_STYLES = {
    height: "1.2em",
    margin:  "0.2rem",
}

const CONT_STYLES = {
alignSelf: "flex-start",
    position: "relative",
    right: "3rem", 
   
}
const Links = () => {
    return (
        <div className={linkStyles['links-container']}>
          <LinksType heading={"MAIN LINKS"} items={['New Arrivals', 'Gift Combos', 'Clearance Zone', "Coupons and Offers",'Photos and Reviews']} />
          <LinksType heading={"SIDE LINKS"} items={['FAQ', '100 Days Return Policy', 'About us', "Privacy Policy",'Terms & Conditions']} />
          <MajorEComLinks/>
             <Socials containerStyles={CONT_STYLES} styles={LINK_STYLES} defaultStyle={"white"} hover={"#29B7FF"}/>
        </div>
    )
}

export default Links;