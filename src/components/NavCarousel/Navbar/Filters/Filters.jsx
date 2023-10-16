import React, {useState} from "react";
import {Popover} from "react-tiny-popover";
import { Link,useLocation} from "react-router-dom";



import TopCategoriesFilter from "./TopCategoriesFilter";
import ProductFilter from "./ProductFilter";
import AnimeFilter from "./AnimeFilter";
import MoreFilter from "./MoreFilter";
import MoreOtherFilter from "./MoreOtherFilter";
import FilterUtil from "./FilterUtil";
import Products from "../../../../Pages/Products";

import useBreakpoints from "../../../../CustomHooks/useBreakpoints";
import filterStyles from "./Filters.module.css";
import moreStyles from "./MoreFilter.module.css";
import categoriesStyles from "./TopCategoriesFilter.module.css";

const Container = ({children, className, onMouseLeave, onMouseOver}) => {
    return  <li className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>{children}</li>
}

const Container1 = ({className, children, onMouseOver, onMouseLeave}) => {
    return <>
       <div className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
           {children}
       </div>
    </>
}

const Filters = () => {
    const [itemsOpen, setItemsOpen] = useState(new Array(3).fill(false));
    const {isFirstMediaQuery, isSecondMediaQuery} = useBreakpoints();
    const location = useLocation();

    
const itemsContent = [
    {
        id: 1,
        text: "TOP CATEGORIES",
        hasSymbol: true,
        symbol: <svg style={{fill: location.pathname!=="/" && "black"  }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "start",
        hasContent: true,
        PopoverContent: TopCategoriesFilter,
        hasClickEvent: false,
    },
     {
        id: 2,
        text: "SHOP BY PRODUCT",
        hasSymbol: true,
        symbol: <svg style={location.pathname!=="/" ? {fill:"black"} : {}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: ProductFilter,
        hasClickEvent: false,
     }, 
     {
        id: 3,
        text: "SHOP BY ANIME",
        hasSymbol: true,
        symbol: <svg style={location.pathname!=="/" ? {fill:"black"} : {}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: AnimeFilter,
        hasClickEvent: false,
     }, {
        id: 4,
        text: "PRODUCTS",
        hasSymbol: false,
        align: "center",
        hasContent: false,
        hasClickEvent: true,
        textAlternate : <Link to="/products" element={<Products/>}></Link>
     },
        {
            id: 5,
            text: "CLEARANCE SALE",
            hasSymbol: false,
            align: "center",
            hasContent: false,
            hasClickEvent: false
         }
     
]



const itemsWith1stMediaQuery = [
    itemsContent[0], 
    itemsContent[1],
    {
        id: 3,
        text: "MORE",
        hasSymbol: true,
        symbol: <svg style={location.pathname!=="/" ? {fill:"black"} : {}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: MoreFilter,
        hasClickEvent: false,
    }

]

const itemsWith2ndMediaQuery = [
    itemsContent[0],
    {
        id: 2, 
        text: "MORE",
        hasSymbol: true,
        symbol: <svg style={location.pathname!=="/" ? {fill:"black"} : {}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: MoreOtherFilter,
        hasClickEvent:false,
    }
]
    // const [isItemWith1stMediaOpen, setIsItemWith1stMediaOpen] = useState(new Array(3).fill(false));

    
    // const handleMouseOver1 = (ind) => {
    //     setIsItemWith1stMediaOpen(()=> {
    //         const new_state = new Array(3).fill(false);
    //         new_state[ind] = true;
    //         return new_state;
    //     })
    // }
    // const handleMouseLeave1 = () => {
    //  setIsItemWith1stMediaOpen(new Array(2).fill(false));
    // }

// const content = isSecondMediaQuery? itemsWith2ndMediaQuery: isFirstMediaQuery ? itemsWith1stMediaQuery : itemsContent;
const handleMouseOver = (index) => {
    setItemsOpen(() => {
        let new_state = new Array(3).fill(false);
        new_state[index] = true;
        return new_state;
    })
}

const handleMouseLeave = ()=> {
    console.log("de hovered");
    setItemsOpen(new Array(3).fill(false))
}
/*
 <div className={moreStyling.filter}>
           <div className={moreStyling.item} onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}>
         <Popover isOpen={isPopoverOpen} align={"center"} positions={['bottom']} content={<AnimeFilter marginStyles={{marginTop: "0"}} onMouseOver={()=>{setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}/>} onClickOutside={()=> {setIsPopoverOpen(false)}}>
                    <span className={moreStyling.itemText}>{"SHOP BY ANIME"} <svg style={{fill:'rgba(23, 45, 59, 0.8)'}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg> </span>
                 </Popover> 
            </div>
         <div className={moreStyling.item}>COMBOS</div>
         <div className={moreStyling.item}>CLEARANCE SALE</div>
    </div>

    

    const Container = ({children, className, children, onMouseOver, onMouseLeave}) => {
        return <>
           <div className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
               {children}
           </div>
        </>
    }

       
    
   
*/


    return (

        <ul className={filterStyles.filterList}>
<FilterUtil
 content={isSecondMediaQuery? itemsWith2ndMediaQuery : isFirstMediaQuery ? itemsWith1stMediaQuery: itemsContent} 
 className={filterStyles.item}
  onMouseOver={handleMouseOver} 
  onMouseLeave={handleMouseLeave} 
  isOpen={itemsOpen}
  Item={Container}
  
   />
        </ul>
    )
}

export default Filters;