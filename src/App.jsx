//importing library functions 
import React from "react";
import {Routes, Route, Outlet, useLocation} from "react-router-dom"

//importing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavCarousel/Navbar/Navbar"

//importing styles 
import appStyles from "./App.module.css"
const NavBarStyles =  {
    /*
    padding: 0 3rem;
    height: 5rem;
    */
    display: "flex",
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 3rem',
    height: "5rem",
    color: 'black',
    position: "relative",
    background: "white",
    boxShadow: "inset 0px 0px 0px white",
}

const svgStyles = {
    fill : "black",
}

const searchStyles = {
    display: 'flex',
    padding: '0.6rem 0.5rem',
    borderRadius:'4px',
    marginRight: '0.3rem',
    fontFamily: "'Dosis', sans-serif",
    background: "white",
    border: "1px solid lightgrey"
}


const App = () => {
    const location = useLocation();
return <div className={appStyles.container}>
<Header/>
{location.pathname!== "/" && <Navbar svgStyles={svgStyles} styles={NavBarStyles} searchStyles={searchStyles}/>}
<Outlet/>
{/* <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/track-order" element = {<TrackOrder/>}></Route>
<Route path="/offers-discount-coupon" element = {<Coupons/>}></Route>
<Route path="/contact" element={<Help/>}></Route>
</Routes> */}
<Footer/>
</div>
};

export default App;