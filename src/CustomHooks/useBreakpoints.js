import {useMediaQuery} from "react-responsive"

 export default function useBreakpoints() {
  // 1110 or lower 
    const isFirstMediaQuery = useMediaQuery({query: '(max-width: 1110px)'});

  return {
     isFirstMediaQuery,
  }
}

