import React, {useState} from 'react'


import FilterUtil from './FilterUtil';
import ProductFilter from './ProductFilter';
import AnimeFilter from './AnimeFilter';

import filterStyles from "./MoreOtherFilter.module.css";

const elements = [
{
   id: 1,
   text: "SHOP BY PRODUCT",
   hasSymbol: true,
   symbol: <svg style={{fill: "rgba(23, 45, 59, 0.8)"}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
   align: "center",
   hasContent: true,
   PopoverContent: ProductFilter,
},
 {
id: 2, 
text: "SHOP BY ANIME",
hasSymbol: true,
symbol: <svg style={{fill: "rgba(23, 45, 59, 0.8)"}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg>,
align: "center",
hasContent: true,
PopoverContent: AnimeFilter,
},
{
   id: 3,
   text: "COMBOS",
   hasSymbol: false,
   align: "center",
   hasContent: false,
}, 
{
   id: 4, 
   text: "CLEARANCE SALE",
   hasSymbol: false,
   align: "center",
   hasContent: false,
}
]

const Container = ({children, className, onMouseLeave, onMouseOver}) => {
   return (<div className={className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} >
          {children}
   </div>)
}
export default function MoreOtherFilter() {
   const [isOpen, setIsOpen] = useState(new Array(2).fill(false));
   const handleMouseOver = (index) => {
      setIsOpen(() => {
         let new_state = new Array(2).fill(false);
         new_state[index] = true;
         return new_state;
      })
   }

   const handleMouseLeave = () => {
      setIsOpen(new Array(2).fill(false));
   }

   const x = {
      marginTop: "3px"
   }
  return (
   <div className={filterStyles.filter}>
       <FilterUtil
       content={elements}
       className={filterStyles.item}
       textClass={filterStyles.itemText}
           popOverStyles={x}
          Item={Container}
          isOpen={isOpen}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
       />
   </div>
  )
}
