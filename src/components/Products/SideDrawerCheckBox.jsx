import React, {useContext, useEffect, useState} from 'react';
import { FilterContext } from '../../Context/SideDrawerContext';

export default function SideDrawerCheckBox({heading, hasCount,ind1, ind2,  count}) {
const {selectedIndices, updateSelectedIndices} = useContext(FilterContext);
const [isChecked, setIsChecked] = useState(false);

const checkedValue = selectedIndices[ind1][ind2];

useEffect(()=> {
setIsChecked(checkedValue);
},[checkedValue]);


  const handleClick = () => {
setIsChecked((prev) => !prev);
updateSelectedIndices(ind1, ind2);
  }



  return (
    <div
     style={{fontFamily:"'Dosis', sans-serif", display:"flex", alignItems:"center", gap:"1rem", cursor:"pointer"}}
     onClick={handleClick}
     >
        <div style={{width:"16px", height:"16px", border: "1px solid lightgrey",display:"flex", justifyContent:"center", alignItems:"center"}}><svg style={{display:isChecked ? "block" : "none"}} width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
        <div style={{cursor:"pointer", fontSize:"0.9rem", fontWeight: isChecked ? "bold" : "400"}}>{heading} {hasCount && `  (${count})`}</div>
    </div>
  )
}
