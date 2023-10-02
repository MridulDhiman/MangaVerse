
import React, {useState} from "react"
import Header from "./components/Header/Header";
import Navbar from "./components/NavCarousel/Navbar/Navbar";
import Carousel from "./components/NavCarousel/Carousel/Carousel";

import "./App.css";
/*
Nature of Header: 
1. dynamic : 1 in centre is dynamic 
2. static : 2 parts are static 
*/
const App = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleBodyClick = () => {
    console.log("body is clicked");
    if(isSearchClicked === true) {
      setIsSearchClicked(false);
    }
  }
  

  const handleSearchClick = (flag) => {
            setIsSearchClicked(flag);
  }
  return (
    <div className={isSearchClicked ? "main" : 'yele'} onClick={handleBodyClick}>
    <Header />
 <Navbar searchClicked={isSearchClicked} onSearchClick={handleSearchClick}/>
 <Carousel/>
   
   
    </div>
  )
};

export default App;