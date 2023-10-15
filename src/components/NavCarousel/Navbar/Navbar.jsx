import React from "react";
import { NavLink } from "react-router-dom";

import useBreakpoints from "../../../CustomHooks/useBreakpoints";
import Filters from "./Filters/Filters";
import Search from "./Search";
import InfoIcons from "./InfoIcons";

import navStyles from "./Navbar.module.css";
const Navbar = ({searchClicked, onSearchClick, svgStyles,  styles, searchStyles }) => {
    const {isFirstMediaQuery}  = useBreakpoints();

    const handleInputClick = (flag) => {
        console.log("clicked here ")
               onSearchClick(flag);
    }
    return (
        <div className={navStyles["nav-container"]} style={styles}>
            <div className={navStyles["left"]}>
                <Filters/>
                <NavLink to="/"><img style={{marginLeft: isFirstMediaQuery && "3.5rem"}} className={navStyles['logo']} src="comic-sense-logo.png"></img></NavLink>
            </div>
            <div className={navStyles["right"]}>
              <Search isFilterClicked={searchClicked} setFlag={handleInputClick} searchStyles={searchStyles}/>
              <InfoIcons svgStyles={svgStyles}/>
            </div>
        </div>
    )
}

export default Navbar;