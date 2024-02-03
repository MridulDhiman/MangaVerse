import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";



import styles from "./ProductItem.module.css";
import ItemContent from "./itemContent";
import ItemImage from "./ItemImage";
import AddToCart from "./AddToCart";
import { getProductById } from "../../../http";

export default function ProductItem({}) {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  console.log("Loader data: ",loaderData);
  const [data, setData] = useState({});

  const location = useLocation();
const params = useParams();
const str = params.productId;

useEffect(()=> {
 
}, [str])

  useEffect(() => {
    
    if(location.state) setData({ ...location.state.item });
    if(!location.state) {
      setData({...loaderData[0]});
    }
  }, [loaderData]);




  
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


export const loader = async ({params}) => {
const products = await getProductById(params.productId);

console.log(products);
return products;
}