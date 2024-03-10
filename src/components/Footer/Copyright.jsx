import React from "react";

import styles from "./Copyright.module.css"

const Copyright = () => {
    return (
       <div className={styles.container} style={{fontFamily: "'Dosis', sans-serif", fontSize:"0.75em", textAlign: "center", padding: "1.8rem 2rem"}}>
       <p style={{marginBottom: "5px"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum optio odit quibusdam ducimus repellat rem totam nostrum. Sit harum animi cum alias. Quidem fugit tenetur odio repudiandae unde eum commodi dolore eaque, incidunt placeat!</p>
<p>Copyright © 2024 MangaVerse</p>
       </div>
    )
}

export default Copyright;