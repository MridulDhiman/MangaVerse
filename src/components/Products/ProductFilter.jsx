import React, {useRef,useState,useEffect} from 'react'

import filterStyles from "./ProductFilter.module.css"
const FilterSvg = ({isHovered}) => { 
  return <svg
     style={{fill: isHovered? "white" : "black"}} height="0.6rem"  fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 971.986 971.986" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3 c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873 c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"></path> </g> </g></svg>
}



export default function ProductFilter({onFilter, onFilterClick}) {
  const [isHovered, setIsHovered] = useState(false);
  // const [incSort, setIncSort] = useState(false);


  const handleOptionClick = (x) => {
    console.log(x);
    if(x.trim()  === "Sort By price: low to high"){
      // console.log("yes")
      onFilter("incSort");
    }

    if(x.trim() === "Sort By price: high to low" ) {
      onFilter("decSort");
    }

    if(x.trim() === "Sort By popularity") {
     onFilter("popSort");
    }

    if(x.trim() === "Sort By average rating") {
      onFilter("ratSort");
    }
  }


 
  return (
    <div  className={filterStyles.container}> 
        <div
         className={filterStyles.filterContainer}
          onClick={onFilterClick}
          onMouseOver={()=> {setIsHovered(true)}}
          onMouseLeave={()=> {setIsHovered(false)}}
          ><FilterSvg isHovered={isHovered}/><span>FILTER</span></div>
        <div>
          <select  onClick={(e) => handleOptionClick(e.target.value)} className={filterStyles.dropDownContainer}>
            {
              ["Sort By popularity", "Sort By average rating", "Sort By latest", "Sort By price: low to high", "Sort By price: high to low "].map((item, index) => {
                return <option key ={index}>
                  {item}
                </option>
              })
            }
          </select>
        </div>
    </div>
  )
}
