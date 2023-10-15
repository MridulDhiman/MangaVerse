import React from 'react'

import filterStyles from "./ProductFilterType.module.css"
export default function ProductFilterType({heading, content}) {

  return (
    <div className={filterStyles.productType}>
        <p className={filterStyles.productHeading}><span style={{color: "rgba(23, 45, 59)", fontWeight: "bolder"}}>{heading}</span> <svg style={{fill: "rgba(23, 45, 59)"}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 15 15" aria-label="Menu dropdown icon"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"/></svg></p>
        <div className={filterStyles.grid}>
          {
            content.map((item, index) => {
              return (
                <div key={index}>
                  {
                    item
                  }
                  </div>
              )
            })
          }
            {/* <div>Tees</div>
            <div>Baby Tees</div>
            <div>Shirts(kimono shirt)</div>
            <div>Hoodies/Jackets</div> */}
        </div>
    </div>
  )
}
