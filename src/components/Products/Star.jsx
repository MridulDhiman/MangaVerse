import React from 'react';


const Star = ({fill}) => {


  return (
   <>
   <svg style={{fill: "red"}} width="1rem" height="1rem" viewBox="0 0 24 24"   data-name={"star filled"} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g>
   <g id="SVGRepo_tracerCarrier" strokeLinecap='round' strokeLinejoin="round"></g>
   <g id="SVGRepo_iconCarrier">
    <defs>
        <clipPath id="heart">
      <path id="Star" d="M10,15,4.122,18.09l1.123-6.545L.489,6.91l6.572-.955L10,0l2.939,5.955,6.572.955-4.755,4.635,1.123,6.545Z" transform="translate(2 3)"></path>
        </clipPath>
    </defs>
     <rect x="0%" y="0"  fill="#FF3B60" width="100%" height="100%"  clipPath="url(#heart)"></rect>
     <rect  x={`${fill}%`} y="0" fill="rgb(211,211,211)" width="100%" height="100%"  clipPath='url(#heart)'></rect>
       </g></svg>
   </>
  );
};

export default Star;
