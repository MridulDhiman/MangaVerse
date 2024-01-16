import React from "react";
import { Link, NavLink } from "react-router-dom";

import useBreakpoints from "../../../CustomHooks/useBreakpoints";
import Filters from "./Filters/Filters";
import Search from "./Search";
import InfoIcons from "./InfoIcons";

import navStyles from "./Navbar.module.css";
const Navbar = ({ svgStyles,  styles, searchStyles}) => {
    const {isFirstMediaQuery}  = useBreakpoints();

    return (
        <div className={navStyles["nav-container"]} style={styles}>
            <div className={navStyles["left"]}>
                <Filters/>
                {/* <NavLink to="/"><img style={{marginLeft: isFirstMediaQuery && "3.5rem"}} className={navStyles['logo']} src="/comic-sense-logo.png"></img></NavLink> */}
                <Link className={navStyles.link} to="/"><span className={navStyles['logo']}>MangaVerse</span></Link>

            </div>
            <div className={navStyles["right"]}>
              <Search  searchStyles={searchStyles}/>
              <InfoIcons svgStyles={svgStyles}/>
            </div>
        </div>
    )
}

export default Navbar;