
import React, {useState} from "react"


import Navbar from "../components/NavCarousel/Navbar/Navbar";
import Carousel from "../components/NavCarousel/Carousel/Carousel";


import "./Home.css";
const Home = () => {
 
const styles = {
    display: 'flex',
    width: '100%',
    justifyContent : 'space-between',
    padding: '1rem 3rem',
    position: 'absolute',
   zIndex: 3,
    color: 'white',
};
 
  return (
    <div>
 <Navbar style={styles} />
 <Carousel/>
    </div>
  )
};

export default Home;