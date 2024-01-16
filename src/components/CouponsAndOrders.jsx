import React from 'react'

import couponStyles from "./Coupons.module.css";
import { ImportExport } from '@mui/icons-material';

const List = ({heading}) => {
    return <div>
    <p style={{textTransform:"capitalize", fontFamily:"'Bungee', sans-serif"}}>{heading}</p>
      <div style={{position:"relative", left: "1rem",fontSize:"0.85rem" }}>
         <li>Buy any <strong>3 Tees</strong> & get <strong>Rs. 200 Off</strong></li>
         <li>Buy any <strong>2 Hawaiian Shirts</strong> & get <strong>Rs. 300 Off</strong></li>
      </div>
    </div>
}
const Para = ({discount, price}) => {
    return <p><strong>{discount}% off</strong> on orders above <strong>{price}</strong> use code <strong>daijoubu{discount}</strong></p>
}


const bottomContainerData = [
    {
        heading: "Tees (half / Full / Polo / Oversize):",
       
    },
    {
        heading: "Badges / Stickers:",
       
    }, 
    {
        heading: "Hawaiian shirts",
        
    }, {
        heading: "Hoodies/Jackets",
       
    },{
        heading: "Manga/Bookmark",
       
    },
    
    {
        heading: "Lanyard Keychain",
    }
]
export default function CouponsAndOrders() {

    

  return (
    <>
    <div className={couponStyles.container}>
        <div className={couponStyles.top}>
                <p style={{padding: "1.4rem",fontFamily: `"Bungee", sans-serif`, fontSize:"30px",color: "#192A3D"}}>COUPONS & OFFERS</p>
                <div className={couponStyles.textContainer}>
                    <div className={couponStyles.innerTextContainer}>
                        <Para discount = {10} price={2500} />
                        <Para discount = {15} price={5000} />
                        <Para discount = {20} price={8000} />
                    </div>
                    <div className={couponStyles.innerTextContainer}>
                        <p><strong>7.5% Cashback</strong> On All Prepaid (Pay Online) Orders.</p>
                        <p>(Cashback is added into user’s ComicSense wallet after order delivery).</p>
                    </div>     
                    <p><em>Note: You must be logged in to get the cashback offer</em></p>
                </div>
                <div className={couponStyles.innerTextContainer} style={{padding: "1.2rem", borderBottom: "3.5px solid rgba(211,211,211, 0.6)"}}>

                  <p><strong>1st Order: </strong></p>
                  <p>Use code <strong>“First10”</strong>& get <strong>Flat 10% Off</strong> (Min Order Value: 999 | Max. discount: 500)</p>
                  <p><em>Note: You must be logged in to get the 1st Order offer</em></p>
                </div>
        </div>
         
        <div className={couponStyles.bottom}>
            <div style={{display:"grid", gridTemplateColumns:"auto auto auto", paddingTop: ".8rem"}}>
{/* <List heading={"HEADING"} list={["Buy any 4 Badges & get 5th FREE", "Buy any 4 Stickers & get 5th FREE"]}/> */}{
            bottomContainerData.map((item, index) => <List heading={item.heading}  key={index}/>)
        }
            </div>

            <div className={couponStyles.bottomTextContainer}>
                <p><strong>Note:</strong> </p>
                <p>Products in Clearance Sale are not applicable for any offers.</p>
                <p>Offers Not Valid during <strong>Any Ongoing Sale.</strong></p>
            </div>
           
        </div>
        
       
    </div>
    </>
    
  )
}
