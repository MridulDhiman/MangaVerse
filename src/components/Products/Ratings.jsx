import React, {useState, useEffect} from 'react'

import Star from './Star'



export default function Ratings({defaultRating, flag}) {
// calculations only on first render
const arr = [
 <Star key={0} fill={0} />,
 <Star key={1} fill={0} />,
 <Star key={2} fill={0} />,
 <Star key={3} fill={0} />,
 <Star key={4} fill={0} />,
  ];
const [starState, setStarState] = useState(arr);

    useEffect(()=>{
        const filled = Math.floor(defaultRating);
        const nonFilled = 5 - filled;
        const partial = defaultRating - filled;
        
        for(let i = 0;i<filled;i++) {
          setStarState((prevState)=> {
              const new_state = prevState;
              new_state[i] = <Star fill={100}/>;
              return new_state;
          })
        }


        setStarState((prev) => {
            const new_state = prev;
              if(nonFilled != 0) new_state[filled] = <Star fill={partial*100}/>
            return new_state;
        })

        

        
    }, [flag])


  return (
    <>
    {/* {starState} */}
    {starState}
    </>
  )
}
