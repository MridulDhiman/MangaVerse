import React, {useState, useRef, useEffect } from 'react';
import { Popover } from 'react-tiny-popover';
import { Link } from 'react-router-dom';



import AnimeFilter from './AnimeFilter';

import filterStyling from "./MoreFilter.module.css"
export default function MoreFilter() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [width, setWidth] = useState(-1);
    const styleRef = useRef(null);

useEffect(() => {
setWidth(styleRef.current.offsetWidth);
}, []);

  return (
    <div className={filterStyling.filter} ref={styleRef} style={{position: "relative", right: (width!==-1) && width/2+20}}>
           <div className={filterStyling.item} onMouseOver={()=> {setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}>
         <Popover  isOpen={isPopoverOpen} align={"center"} positions={['bottom']} content={<AnimeFilter marginStyles={{marginTop: "0"}} onMouseOver={()=>{setIsPopoverOpen(true)}} onMouseLeave={()=> {setIsPopoverOpen(false)}}/>} onClickOutside={()=> {setIsPopoverOpen(false)}}>
                    <span className={filterStyling.itemText}>{"SHOP BY ANIME"} <svg style={{fill:'rgba(23, 45, 59, 0.8)'}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg> </span>
                 </Popover> 
            </div>
         <div className={filterStyling.item}><Link style={{textDecoration: "none", color: "rgba(23, 45, 59, 0.8)"}} to="/products">PRODUCTS</Link></div>
         <div className={filterStyling.item}>CLEARANCE SALE</div>
    </div>
  )
}
