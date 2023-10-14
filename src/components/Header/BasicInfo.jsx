import React from "react";

import { NavLink } from "react-router-dom";


import basicStyles from "./BasicInfo.module.css"
const BasicInfo = ()=> {
    let styleRef = React.useRef(null);
    let styleRef2 = React.useRef(null);
    let styleRef3 = React.useRef(null);
   
    const linkStyling = ({isActive}) => {
          return {
            color: isActive? "white" : "#29B7FF",
            textDecoration: isActive ? "underline" : "none"
          }
    }
return <div className={basicStyles.alright}>
<span><strong> <NavLink ref={styleRef} to="/track-order"  onMouseOver={()=> styleRef.current.style.color= "white"} onMouseLeave={()=> styleRef.current.style = "color: #29B7FF;text-decoration: none;"}  style={linkStyling}>TRACK ORDER</NavLink></strong></span>
<span><strong><NavLink ref={styleRef2} to="/offers-discount-coupon" onMouseOver={()=> styleRef2.current.style.color= "white"} style={linkStyling} onMouseLeave={()=> styleRef2.current.style = `
color: #29B7FF;
text-decoration: none;
`}>COUPONS AND OFFERS</NavLink></strong></span>
<span><strong><NavLink ref={styleRef3} to="/contact" onMouseOver={()=> styleRef3.current.style.color= "white"} style={linkStyling} onMouseLeave={()=> styleRef3.current.style = "color:#29B7FF;text-decoration: none;"}>NEED HELP?</NavLink></strong></span>

</div>
}


export default BasicInfo;
