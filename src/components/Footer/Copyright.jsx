import React from "react";

import styles from "./Copyright.module.css"

const Copyright = () => {
    return (
       <div className={styles.container} style={{fontFamily: "'Dosis', sans-serif", fontSize:"0.75em", textAlign: "center", padding: "1.8rem 2rem"}}>
       <p style={{marginBottom: "5px"}}> All artworks posted on this website is intended as fan art and is not purported to be official merchandise unless indicated otherwise. If you have any issues regarding the artwork do write in to us at care@comicsense.xyz.</p>
<p>Copyright © 2023 ComicSense</p>
       </div>
    )
}

export default Copyright;