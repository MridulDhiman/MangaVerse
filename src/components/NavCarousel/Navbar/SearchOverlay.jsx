import React, { useEffect, useState } from 'react'
import searchhStyles from "./Search.module.css";
import { useMutation } from '@tanstack/react-query';
import { filterProducts } from '../../../http';
import LoadingSkeleton from '../../LoadingSkeleton';
import SearchResult from './SearchResult';
export default function ({ className, searchStyles}) {
  const [searchStr,setSearchStr] = useState("");
  const [items, setItems] = useState([]);
  const [isThereData, setIsThereData] = useState(false);
const {data,mutate} = useMutation({
mutationFn: (data) => filterProducts(data), 
onSuccess: ()=> {
setIsThereData(true);
}
});


useEffect(()=> {
// if(data) console.log(data);
if(data) setItems(data);

}, [data])

  const clickHandler = () => {
    if(searchStr.length > 0) {
      mutate(searchStr);
    }

    // setSearchStr("");
  }

  // console.log(items);

  return (<>
   <div onMouseDown={()=> {}} onMouseLeave={()=>{setIsThereData(false)}} className={className} style={searchStyles}>
    <svg  style={{"fill": searchStr.length > 0 ? "rgb(77, 53, 53)" : "rgb(142, 142, 142)"}} onClick={clickHandler} className={searchhStyles['search-icon']} width="18" height="18" viewBox="0 0 51.539 51.361">
              <path d="M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z"/>
         </svg>
         <input  onBlur={()=> {setIsThereData(false)}} value={searchStr} onChange={(e) =>   setSearchStr(e.target.value)} className={searchhStyles['search-text']} type="text" name="filter" id="filter" placeholder="Search Merch (it rhymes :D)"/>
    </div>
    <div>
    {isThereData && <SearchResult onMouseOver={()=> setIsThereData(true) }  onMouseLeave={()=> setIsThereData(false)} key={items} data={items}/>}     
    </div>
  </>
   
  )
}
