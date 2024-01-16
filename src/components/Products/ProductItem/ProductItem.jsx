import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

export function loader({ params }) {
  return { product: params.productId };
}

import styles from "./ProductItem.module.css";
import ItemContent from "./itemContent";
import ItemImage from "./ItemImage";
import AddToCart from "./AddToCart";
import { getProductById } from "../../../http";
export default function ProductItem({}) {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setData({ ...location.state.item });
  }, []);

  
  return (
  <>
 <div className={styles.container}>
      <div className={styles.top}>
        <ItemImage item={data}/>
      <ItemContent item={data}  />
      </div>
      <div className={styles.relatedContentContainer}></div>
      <div className={styles.reviewContainer}></div>
    <AddToCart  item={data}/>
   
    </div>
  </>
    
  );
}
