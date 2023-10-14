import React from "react";

import navStyles from "./Navbar.module.css";
import Filters from "./Filters";
import Search from "./Search";
import InfoIcons from "./InfoIcons";
import { NavLink } from "react-router-dom";

const Navbar = ({searchClicked, onSearchClick}) => {

    const handleInputClick = (flag) => {
        console.log("clicked here ")
               onSearchClick(flag)
    }
    return (
        <div className={navStyles["nav-container"]}>
            <div className={navStyles["left"]}>
                <Filters/>
                <NavLink to="/"><img className={navStyles['logo']} src="comic-sense-logo.png"></img></NavLink>
            </div>
            <div className={navStyles["right"]}>
              <Search isFilterClicked={searchClicked} setFlag={handleInputClick}/>
              <InfoIcons/>
            </div>
        </div>
    )
}

export default Navbar;