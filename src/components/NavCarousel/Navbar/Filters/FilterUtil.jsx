import React from 'react'
import { Popover } from 'react-tiny-popover';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function FilterUtil({className,textClass,popOverStyles, content,onMouseOver, onMouseLeave,Item, isOpen }) {
  const location = useLocation();
  const itemList =   content.map((item, index) => {   
    return <Item
    key={item.id}
    className= {className}
    onMouseOver= {() => {onMouseOver(index)}}
    onMouseLeave={onMouseLeave}
    >
       {
         item.hasContent ? 
         <Popover
         isOpen={isOpen[index]}
         align={item.align}
         content={
          <item.PopoverContent
          styles={popOverStyles}
          onMouseOver= {() => {onMouseOver(index)}}
          onMouseLeave={onMouseLeave}
          />
         }
         onClickOutside={onMouseLeave}
         >
         <span className={textClass}>
          {item.text} {item.hasSymbol && item.symbol}
         </span>
         </Popover>
         : <>
         <span className={textClass}> {item.text!== 'PRODUCTS' ? item.text : <Link style={{textDecoration: "none", color: content.length === 5 ? (location.pathname!=="/" ? "black": "white") : "rgba(23, 45, 59, 0.8)"}} to="/products">PRODUCTS</Link>} {item.hasSymbol && item.symbol}</span>
         </>
       }
    </Item>
     });
  return (
    <>
    {
      itemList
    }
    {/* {
      content.map((item, index) => {   
     <Item 
     key={item.id}
     className= {className}
     onMouseOver= {() => {onMouseOver(index)}}
     onMouseLeave={() => {onMouseLeave(index)}}
     >
        {
          item.hasContent ? 
          <Popover
          isOpen={isOpen[index]}
          align={item.align}
          onMouseOver= {() => {onMouseOver(index)}}
          onMouseLeave={() => {onMouseLeave()}}
          onClickOutside={() => {onMouseLeave()}}
          >
          <span>
           {item.text} {item.hasSymbol && item.symbol}
          </span>
          </Popover>
          : <>
          <span> {item.text} {item.hasSymbol && item.symbol}</span>
          </>
        }
     </Item>
      })
    } */}
    </>
  )
}
