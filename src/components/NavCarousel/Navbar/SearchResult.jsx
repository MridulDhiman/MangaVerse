import React, { useEffect } from 'react'


import styles from "./SearchResult.module.css";
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
const SearchResult = ({data, onMouseOver, onMouseLeave}) => {
  console.log(data);
    if(data.length === 0) {
      return <div className={styles.container}>
      
        </div>
    }


    const FIRST_ITEM_STYLES = {
      background: "lightgray"
    };
    

    const dataItems = data.map((item, index) => {
         return <div key={item._id}>
          <Link to={`products/${item.slug}`} style={{textDecoration: "none", color: "black"}}>
          <div onClick={()=> {onMouseLeave()}} className={styles.item}>
          {/* <div>{item.initialImage}</div> */}
          <img  src={`/${item.initialImage}`} alt={item.name} width="50" height="60"/>
          <p>{item.name}</p>
          </div>
          </Link>
          
          
          
          </div>
    });
   
  return (
    
      <>
      <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={styles.container}>
       {dataItems}
    </div>
    {/* <div onClick={() => {onBackDropClick()}} className={styles.backdrop}></div> */}

      </>
  )
}

export default SearchResult;