import React from 'react'

import eCommStyles from "./EComm.module.css";
export default function MajorEComLinks() {
  return (
    <div className={eCommStyles.links}>
           <p style={{fontSize: "1.1em", margin: "0.5rem 0",position:"relative", right: "2.5rem"}}>Also Available On: </p>
           <ul>
            <li><span style={{"textDecoration": "underline" ,"cursor": "pointer"}}>Amazon</span></li>
            <li><span style={{"textDecoration": "underline", "cursor": "pointer"}}>Myntra</span></li>
            <li><span style={{"textDecoration": "underline", "cursor": "pointer"}}>Flipkart</span></li>
           </ul>
    </div>
  )
}
