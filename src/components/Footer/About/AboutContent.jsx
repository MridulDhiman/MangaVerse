import React from "react";


import contentStyles from "./AboutContent.module.css";


const AboutContent = ({heading, content}) => {
    return <div>
        <p className={contentStyles.heading}>{heading}</p>
        <p className={contentStyles.content}>{content}</p>
    </div>
}

export default AboutContent;