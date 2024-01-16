import React from 'react';
import { IconContext } from 'react-icons';


// importing react icons 
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

import styles from "./ItemContentSocials.module.css";

const ItemContentSocials
 = () => {
  return (
    <div className={styles.iconContainer}>
        <IconContext.Provider value={{className:  `${styles.icon}`}}>
<FaFacebook  />
<FaTwitter/>
<FaPinterest/>
<FaLinkedin/>
<FaReddit/>
<IoLogoWhatsapp/>
<FaEnvelope/>
        </IconContext.Provider>
    </div>
  )
}

export default ItemContentSocials
