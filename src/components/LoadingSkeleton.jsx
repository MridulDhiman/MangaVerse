import React from 'react';

import { Watch } from 'react-loader-spinner';
import styles from "./LoadingSkeleton.module.css";
import { createPortal } from 'react-dom';

const LoadingSkeleton = () => {
  return (
    <div>{
        createPortal(<Watch 
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="blueviolet"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass={`${styles.loader}`}/>,
            document.getElementById('loader-root')
            )
        } </div>
  )
}

export default LoadingSkeleton