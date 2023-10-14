import React from 'react'

import eCommStyles from "./EComm.module.css";
export default function MajorEComLinks() {
  return (
    <div className={eCommStyles.links}>
           <p style={{fontSize: "1.1em", margin: "0.5rem 0",position:"relative", right: "2.5rem"}}>Also Available On: </p>
           <ul>
            <li><a className={eCommStyles.link} href="https://www.amazon.in/stores/ComicSense.xyz/page/9340D54A-BB4C-4C59-926F-3A5F6EC5B510" target="_blank">Amazon</a></li>
            <li><a className={eCommStyles.link} href="https://www.myntra.com/comicsense" target="_blank">Myntra</a></li>
            <li><a className={eCommStyles.link}  href="https://www.flipkart.com/search?q=comicsense" target ="_blank">Flipkart</a></li>
           </ul>
    </div>
  )
}
