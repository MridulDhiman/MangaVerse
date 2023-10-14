//importing library functions 
import React from "react";
import {Routes, Route, Outlet} from "react-router-dom"

//importing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavCarousel/Navbar/Navbar"

//importing styles 
import appStyles from "./App.module.css"

const App = () => {
return <div className={appStyles.container}>
<Header/>
<Navbar/>
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