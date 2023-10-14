import React from "react";

import About from "./About/About";
import Links from "./Links/Links";
import Copyright from "./Copyright";

import footerStyles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
        <About/>
        <Links/>
        <Copyright/>
        </div>
    )
}

export default Footer;