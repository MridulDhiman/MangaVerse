import React, {useState} from "react";
import {Popover} from "react-tiny-popover";


import TopCategoriesFilter from "./TopCategoriesFilter";
import ProductFilter from "./ProductFilter";
import AnimeFilter from "./AnimeFilter";
import MoreFilter from "./MoreFilter"

import useBreakpoints from "../../../../CustomHooks/useBreakpoints";
import filterStyles from "./Filters.module.css";

const itemsContent = [
    {
        id: 1,
        text: "TOP CATEGORIES",
        hasSymbol: true,
        symbol: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "start",
        hasContent: true,
        PopoverContent: TopCategoriesFilter,
    },
     {
        id: 2,
        text: "SHOP BY PRODUCT",
        hasSymbol: true,
        symbol: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: ProductFilter
     }, 
     {
        id: 3,
        text: "SHOP BY ANIME",
        hasSymbol: true,
        symbol: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: AnimeFilter
     }, {
        id: 4,
        text: "PRODUCTS",
        hasSymbol: false,
        align: "center",
        hasContent: false,
     },
        {
            id: 5,
            text: "CLEARANCE SALE",
            hasSymbol: false,
            align: "center",
            hasContent: false,
         }
     
]



const itemsWith1stMediaQuery = [
    itemsContent[0], 
    itemsContent[1],
    {
        id: 3,
        text: "MORE",
        hasSymbol: true,
        symbol: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
        align: "center",
        hasContent: true,
        PopoverContent: MoreFilter,
    }

]
const Filters = () => {
    const [itemsOpen, setItemsOpen] = useState(new Array(3).fill(false));
    const {isFirstMediaQuery} = useBreakpoints();

const content = isFirstMediaQuery ? itemsWith1stMediaQuery : itemsContent;

    const itemsList = content.map((item, index) => {
        return (
            <li key={item.id} className={filterStyles.item} onMouseOver={()=> {setItemsOpen(() => {
                let new_state = new Array(3).fill(false);
                new_state[index] = true;
                return new_state;
            })}} onMouseLeave={()=> {setItemsOpen(new Array(3).fill(false))}}>
                {
                    item.hasContent 
                    ? <Popover isOpen={itemsOpen[index]} align={item.align} positions={['bottom']} content={<item.PopoverContent onMouseOver={()=> {setItemsOpen(() => {
                        let new_state = new Array(3).fill(false);
                        new_state[index] = true;
                        return new_state;
                    })}} onMouseLeave={()=> {setItemsOpen(new Array(3).fill(false))}}/>} onClickOutside={()=> {setItemsOpen(new Array(3).fill(false))}}>
                    <span>{item.text} {item.hasSymbol && item.symbol}</span>
                 </Popover> 
                    : <>
                    <span>{item.text} {item.hasSymbol && item.symbol}</span>
                    </>
                }
            </li>
        )
    })

    return (
        <ul className={filterStyles.filterList}>
{itemsList}
             {/* <li className={filterStyles.item} onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}>
             <Popover isOpen={isPopoverOpen} align={"start"} positions={['bottom']} content={<TopCategoriesFilter onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}/>} onClickOutside={() => {setIsPopoverOpen(false)}}>
                <span>TOP CATEGORIES <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>
                </span>
             </Popover>   
                </li>
            <li className={filterStyles.item} onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}>
            <Popover isOpen={isPopoverOpen} align={"start"} positions={['bottom']} content={<ProductFilter onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}/>} onClickOutside={() => {setIsPopoverOpen(false)}}>
                <span>
                SHOP BY PRODUCT <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>
                </span>
             </Popover> 
                </li>
            <li className={filterStyles.item} >SHOP BY ANIME <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></li>
            <li className={filterStyles.item} >COMBOS</li>
            <li className={filterStyles.item} >CLEARANCE SALE</li> */}
        </ul>
    )
}

export default Filters;