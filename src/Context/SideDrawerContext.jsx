import React , {useState, createContext, useEffect} from 'react';
import { useQuery } from '@tanstack/react-query';
import {  fetchProducts } from '../http';
import { createItemDescArray } from '../util';

export const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });
  const [selectedIndices, setSelectedIndices] = useState([[], []]);
 const [productContent, setProductContent] = useState([]);
const [animeContent, setAnimeContent] = useState([]);

useEffect(()=> {
  if(data) {
    const  productTypes = data.map((item) => item.productType);
    const animeTypes =  data.map((item) => item.animeType);
let x = createItemDescArray(productTypes);
let y = createItemDescArray(animeTypes);

setProductContent(x);
setAnimeContent(y);


    setSelectedIndices([
      new Array(x.length).fill(false),
      new Array(y.length).fill(false),
    ])
  }
}, [data]);



  const updateSelectedIndices = (ind1, ind2) => {
      setSelectedIndices((prev) => {
        const new_state = prev;
       new_state[ind1][ind2] =  !prev[ind1][ind2];
       return new_state;
      });
  }



  return (
    <FilterContext.Provider value={{selectedIndices, animeContent, productContent, updateSelectedIndices}}>
        {children}
    </FilterContext.Provider>
  )
}