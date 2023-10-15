import React from "react";
import { NavLink } from "react-router-dom";


import Filters from "./Filters/Filters";
import Search from "./Search";
import InfoIcons from "./InfoIcons";

import navStyles from "./Navbar.module.css";
const Navbar = ({searchClicked, onSearchClick, svgStyles,  styles, searchStyles }) => {

    const handleInputClick = (flag) => {
        console.log("clicked here ")
               onSearchClick(flag);
    }
    return (
        <div className={navStyles["nav-container"]} style={styles}>
            <div className={navStyles["left"]}>
                <Filters/>
                <NavLink to="/"><img className={navStyles['logo']} src="comic-sense-logo.png"></img></NavLink>
            </div>
            <div className={navStyles["right"]}>
              <Search isFilterClicked={searchClicked} setFlag={handleInputClick} searchStyles={searchStyles}/>
              <InfoIcons svgStyles={svgStyles}/>
            </div>
        </div>
    )
}

export default Navbar;