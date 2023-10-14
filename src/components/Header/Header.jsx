import React from "react";
import headerStyles from "./Header.module.css";
import Socials from "../Socials/Socials";
import MovingText from "./MovingText";
import BasicInfo from "./BasicInfo";


const Header = ()=> {
return <div className={headerStyles.header}>
<Socials defaultStyle={"#29B7FF"} hover={"white"} />
<MovingText></MovingText>
<BasicInfo></BasicInfo>
</div>
}


export default Header;
