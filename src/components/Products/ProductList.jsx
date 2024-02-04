//importing from libraries
import React, {useState, useEffect, useContext} from 'react'
import Drawer from '@mui/material/Drawer';


//import components
import ProductFilter from './ProductFilter';
import Product from './Product';
import SideDrawer from './SideDrawer';


//import styles
import productStyles from "./ProductList.module.css";


//importing context
import { FilterContext } from '../../Context/SideDrawerContext';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../http';



const items = [
    {
       name: "Gomu Gomu No Hoodie",
       price: 1299,
       hasDiscount: true,
       discountedPrice: 1999,
       addedToWishlist: false,
       hoverImage : "products/onepiece_image.webp",
       initialImage : "products/one_piece_2.webp",
       isSoldOut: false,
       hasSensitiveContent: false,
       noOfReviews: 8,
       productType: "Tees",
       animeType: "One Piece",
       avgRating: 4.4,// show rating UI if less than 10 customer reviews
       allSizesAvailable: false,
       availableSizes: ["XS", "S", "M", "XL"],// agar 0 customer reviews 
       hasOffer: true,
       offerDueDate: new Date(),
       offerType: ["Limited Edition", "Neon Print", "Sleeveless"] 
    }, 
     {
      name : "Bankai Hoodie (Oversize Drop-Shoulder)",
      price: 1999,
      hasDiscount: true,
      discountedPrice: 2299,
      addedToWishlist: false,
      hoverImage : "products/bankai2.webp",
      initialImage : "products/bankai1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      noOfReviews: 3,
      avgRating: 5,// show rating UI if less than 10 customer reviews
      allSizesAvailable: true,
      availableSizes: ["XS", "S", "M", "L", "XL"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      productType: "Hoodies",
      animeType: "Bleach",
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"] 
     },
     {
      name : "Draken Pattern Tee (Oversize Drop-Shoulder)",
      price: 849,
      hasDiscount: true,
      discountedPrice: 1049,
      addedToWishlist: false,
      hoverImage : "products/draken2.webp",
      initialImage : "products/draken1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      productType: "Tees",
      animeType:"Tokyo Revengers",
      noOfReviews: 26,
      avgRating: 4.2,// show rating UI if less than 10 customer reviews
      allSizesAvailable: true,
      availableSizes: ["XS", "S", "M", "L", "XL"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"] 
     },
     {
      name : "One Piece Vol. 08",
      price: 699,
      hasDiscount: false,
      addedToWishlist: false,
      hoverImage : "products/onepiecemanga2.webp",
      initialImage : "products/onepiecemanga1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      noOfReviews: 0,
      productType:"Manga",
      animeType:  "One Piece",
      avgRating: 4,// show rating UI if less than 10 customer reviews
      allSizesAvailable: false,
      availableSizes: [ "M", "L", "XL"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"] 
     },
     {
      name : "Itadori Jujutsu Uniform",
      price: 1399,
      hasDiscount: true,
      discountedPrice: 1999,
      addedToWishlist: false,
      hoverImage : "products/itadori2.webp",
      initialImage : "products/itadori1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      noOfReviews: 48,
      productType: "Uniform",
      animeType: "Jujutsu Kaisen",
      avgRating: 4.6,// show rating UI if less than 10 customer reviews
      allSizesAvailable: false,
      availableSizes: ["XS", "S", "XL"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"] 
     },
     {
      name : "Kamehameha Hoodie",
      price: 1299,
      hasDiscount: true,
      discountedPrice: 1999,
      addedToWishlist: false,
      hoverImage : "products/kamehameha2.webp",
      initialImage : "products/kamehameha1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      noOfReviews: 9,
      productType: "Hoodies",
      animeType: "Dragon Ball Z",
      avgRating: 5,// show rating UI if less than 10 customer reviews
      allSizesAvailable: false,
      availableSizes: ["S", "M", "L"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"],
     },
     {
      name : "Trafalgar Law (New World) Hoodie",
      price: 1499,
      hasDiscount: true,
      discountedPrice: 1999,
      addedToWishlist: false,
      hoverImage : "products/law2.webp",
      initialImage : "products/law1.webp",
      isSoldOut: false,
      hasSensitiveContent: false,
      noOfReviews: 11,
      productType:"Hoodies",
      animeType: "One Piece",
      avgRating: 4.73,// show rating UI if less than 10 customer reviews
      allSizesAvailable: true,
      availableSizes: ["S"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"],
     },
     {
      name : "Hokage Cloak",
      price: 899,
      hasDiscount: true,
      discountedPrice: 2000,
      addedToWishlist: false,
      hoverImage : "products/hokagecloak1.webp",
      initialImage : "products/hokagecloak.webp",
      isSoldOut: false,
      productType:"Cloak",
      animeType :"Naruto",
      hasSensitiveContent: false,
      noOfReviews: 6,
      avgRating: 5,// show rating UI if less than 10 customer reviews
      allSizesAvailable: false,
      availableSizes: ["S", "M", "L", "XL", "XXL"],// agar 0 customer reviews 
      hasOffer: true,
      offerDueDate: new Date(),
      offerType: ["Limited Edition", "Neon Print", "Sleeveless"],
     }
];



export default function ProductList() {
  const { isPending, data} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  staleTime: 5000
  });
  const [pItems, setPItems] = useState(items);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const {selectedIndices} = useContext(FilterContext);
  useEffect(()=>{
      setPItems(data);
  }, [data])



const handleFilter = (type) => {
  console.log("it's working");
const sortedCopy = [...pItems];

sortedCopy.sort((a,b) => {
  if(type === 'incSort') {
    return a.price - b.price;
  }
  else if(type === 'decSort') {
    return b.price - a.price;
  }
  else if(type === 'popSort') {
    return b.noOfReviews - a.noOfReviews;
  }
  else if(type === "ratSort") {
    return b.avgRating - a.avgRating;
  }
});

setPItems(sortedCopy);

}

const handleFilterClick = () => {
  setIsSideBarOpen(true);
}

const handleLeftDrawerFilterBtnClick = (x,y) => {
  setIsSideBarOpen(false);
// console.log(selectedIndices);
const [product, anime] = selectedIndices;
let productSelected = [];
let animeSelected = [];

if(product?.includes(true) || anime?.includes(true)) {
  if(product.length !== 0 && anime.length === 0) {
    for(let i = 0;i<product.length;i++) {
          if(product[i] === true) {
           productSelected.push(x[i].type);
          }  
    }

   const items = pItems.filter((el) => productSelected.includes(el.productType))
   setPItems(items);
  }
  
  if(anime.length !== 0 && product.length === 0) {
    for(let i = 0;i<product.length;i++) {
      if(anime[i] === true) {
        animeSelected.push(y[i].type);
      }
    }
    const items =  pItems.filter((el) => animeSelected.includes(el.animeType));
    setPItems(items);
  }
  
  if(anime.length !== 0 && product.length !== 0) {
    for(let i = 0;i<product.length;i++) {
      if(product[i] === true) {
        productSelected.push(x[i].type);
      }
      
      
    }
    
    for(let i = 0;i<anime.length;i++) {
      if(anime[i] === true) {
        animeSelected.push(y[i].type);
      }  
    }
    
    const items = pItems.filter((el) => productSelected.includes(el.productType) || animeSelected.includes(el.animeType))
    console.log(items);
    setPItems(items);
  }
}

else {
  setPItems(data);
}


}


const onClose = ()=> {setIsSideBarOpen(false)}
  
  return (
    <>
    
    <Drawer
    anchor={"left"}
    open={isSideBarOpen}
    onClose={onClose}>
      <SideDrawer onBtnClick={handleLeftDrawerFilterBtnClick} onClose={onClose}/>
    </Drawer>
    <ProductFilter  onFilter={handleFilter} onFilterClick={handleFilterClick}/>

    <div className={productStyles.grid}>
    {isPending ? <p>Loading...</p>
      : pItems && pItems.map((item,index) => <Product index={index} key={index} item={item}/>)
    }
    </div>
    
    </>
  )
}
 