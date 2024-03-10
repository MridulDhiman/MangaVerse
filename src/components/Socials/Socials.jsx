import React, {useRef} from "react";
// import {AiFillInstagram} from "react-icons/ai"
// import {BsDiscord} from "react-icons/bs"
// import {IoLogoYoutube} from "react-icons/io5";

import socialStyles from "./Socials.module.css";

const Socials =({defaultStyle,hover,containerStyles, styles})=> {
  
 let style1Ref = useRef(null);
 let style2Ref = useRef(null);
 let style3Ref = useRef(null);

return <div className={socialStyles.icons} style={containerStyles} >
    <span>
    <svg ref={style1Ref} style={{fill: defaultStyle, ...styles}} onMouseOver={()=> {style1Ref.current.style.fill = hover}} onMouseLeave={()=> {style1Ref.current.style.fill = defaultStyle}} className={socialStyles.icon} width="20px" height="20px" viewBox="0 0 20 20" aria-label="Discord Icon">
					<path d="M17.2,4.2c-1.7-1.4-4.5-1.6-4.6-1.6c-0.2,0-0.4,0.1-0.4,0.3c0,0-0.1,0.1-0.1,0.4c1.1,0.2,2.6,0.6,3.8,1.4C16.1,4.7,16.2,5,16,5.2c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.2-0.1C13.3,4,10.5,3.9,10,3.9S6.7,4,4.6,5.3C4.4,5.5,4.1,5.4,4,5.2C3.8,5,3.9,4.7,4.1,4.6c1.3-0.8,2.7-1.2,3.8-1.4C7.9,3,7.8,2.9,7.8,2.9C7.7,2.7,7.5,2.6,7.4,2.6c-0.1,0-2.9,0.2-4.6,1.7C1.8,5.1,0,10.1,0,14.3c0,0.1,0,0.2,0.1,0.2c1.3,2.2,4.7,2.8,5.5,2.8c0,0,0,0,0,0c0.1,0,0.3-0.1,0.4-0.2l0.8-1.1c-2.1-0.6-3.2-1.5-3.3-1.6c-0.2-0.2-0.2-0.4,0-0.6c0.2-0.2,0.4-0.2,0.6,0c0,0,2,1.7,6,1.7c4,0,6-1.7,6-1.7c0.2-0.2,0.5-0.1,0.6,0c0.2,0.2,0.1,0.5,0,0.6c-0.1,0.1-1.2,1-3.3,1.6l0.8,1.1c0.1,0.1,0.2,0.2,0.4,0.2c0,0,0,0,0,0c0.8,0,4.2-0.6,5.5-2.8c0-0.1,0.1-0.1,0.1-0.2C20,10.1,18.2,5.1,17.2,4.2z M7.2,12.6c-0.8,0-1.5-0.8-1.5-1.7s0.7-1.7,1.5-1.7c0.8,0,1.5,0.8,1.5,1.7S8,12.6,7.2,12.6z M12.8,12.6c-0.8,0-1.5-0.8-1.5-1.7s0.7-1.7,1.5-1.7c0.8,0,1.5,0.8,1.5,1.7S13.7,12.6,12.8,12.6z"></path>
				</svg>
    </span>
   <span>
   <svg ref={style2Ref} style={{fill: defaultStyle, ...styles}} onMouseOver={()=> {style2Ref.current.style.fill = hover}} onMouseLeave={()=> {style2Ref.current.style.fill = defaultStyle}} className={socialStyles.icon} width="20" height="20" viewBox="0 0 20 20" aria-label="Instagram Icon">
					<circle cx="10" cy="10" r="3.3"></circle>
					<path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"></path>
				</svg>
   </span>

<span >
<svg ref={style3Ref} style={{fill: defaultStyle, ...styles}} onMouseOver={()=> {style3Ref.current.style.fill = hover}} onMouseLeave={()=> {style3Ref.current.style.fill = defaultStyle}} className={socialStyles.icon} width="20" height="20" viewBox="0 0 20 20" aria-label="YouTube Icon">
					<path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"></path>
				</svg>
</span>
  
    {/* <BsDiscord />
    <AiFillInstagram className={socialStyles.icon} style={{transform: "scale(1.2)"}}/>
    <IoLogoYoutube className={socialStyles.icon} style={{transform: "scaleX(1) scaleY(1.3)"}} /> */}
</div>
}


export default Socials;
