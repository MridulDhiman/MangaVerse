import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useSelector } from "react-redux";

import Account from "../../../Pages/Account";
import infoIconStyles from "./InfoIcons.module.css";
import CartDrawer from "./CartDrawer";

const InfoIcons = ({ svgStyles, likes }) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const flag = useSelector((state) => state.drawer.flag);

  let svg1Ref = useRef(null);
  let svg2Ref = useRef(null);
  let svg3Ref = useRef(null);

  // library hooks
  const likeCount = useSelector(({ likes }) => likes.count);
  console.log(likeCount);


  useEffect(() => {
console.log(likeCount);
  }, [likeCount]);

  useEffect(()=> {
      setIsCartClicked(flag);
  }, [flag])


  const handleCartClick = () => {
    setIsCartClicked(true);
  };

  const handleCartClose = () => {
    setIsCartClicked(false);
  };

  return (
    <div  style={infoIconStyles["icons"]}>
      <Drawer anchor={"right"} open={isCartClicked} onClose={handleCartClose}>
        <CartDrawer onClose={handleCartClose} />
      </Drawer>
      <span>
        <Link
          to="/account"
          element={<Account />}
          style={{ textDecoration: "none" }}
        >
          <svg
            ref={svg1Ref}
            style={svgStyles}
            className={infoIconStyles["icon"]}
            onMouseOver={() => {
              svg1Ref.current.style.fill = "red";
            }}
            onMouseLeave={() => {
              svg1Ref.current.style.fill = svgStyles ? "black" : "white";
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            aria-label="Account header icon"
          >
            <path
              d="M10.5,9h-6c-2.1,0-3.8,1.7-3.8,3.8v1.5c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.5c0-1.2,1-2.2,2.2-2.2h6c1.2,0,2.2,1,2.2,2.2v1.5c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.5C14.2,10.7,12.6,9,10.5,9zM7.5,7C9.4,7,11,5.4,11,3.5&#10;&#9;S9.4,0,7.5,0S4,1.6,4,3.5S5.6,7,7.5,7zM7.5,1.5c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S6.4,1.5,7.5,1.5z"
            />
          </svg>
        </Link>
      </span>
      <span>
        {" "}
        <svg
          ref={svg2Ref}
          style={svgStyles}
          className={infoIconStyles.icon}
          onMouseOver={() => {
            svg2Ref.current.style.fill = "red";
          }}
          onMouseLeave={() => {
            svg2Ref.current.style.fill = svgStyles ? "black" : "white";
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          aria-label="Wishlist header icon"
        >
          <path 
            d="M7.5,13.9l-0.4-0.3c-0.2-0.2-4.6-3.5-5.8-4.8C0.4,7.7-0.1,6.4,0,5.1c0.1-1.2,0.7-2.2,1.6-3c0.9-0.8,2.3-1,3.6-0.8&#10;&#9;C6.1,1.5,6.9,2,7.5,2.6c0.6-0.6,1.4-1.1,2.4-1.3c1.3-0.2,2.6,0,3.5,0.8l0,0c0.9,0.7,1.5,1.8,1.6,3c0.1,1.3-0.3,2.6-1.3,3.7&#10;&#9;c-1.2,1.4-5.6,4.7-5.7,4.8L7.5,13.9z M4.2,2.7C3.6,2.7,3,2.9,2.5,3.3c-0.6,0.5-0.9,1.2-1,1.9C1.4,6.1,1.8,7,2.4,7.8&#10;&#9;c0.9,1,3.9,3.4,5.1,4.3c1.2-0.9,4.2-3.3,5.1-4.3c0.7-0.8,1-1.7,0.9-2.6c-0.1-0.8-0.4-1.4-1-1.9l0,0c-0.6-0.5-1.5-0.7-2.3-0.5&#10;&#9;C9.3,3,8.6,3.5,8.2,4.2L7.5,5.4L6.8,4.2C6.4,3.5,5.7,3,4.9,2.8C4.7,2.8,4.4,2.7,4.2,2.7z"
          />
        </svg>
        {likeCount && likeCount !== 0 ? (
          <span  className={infoIconStyles.likeCount}>
            {likeCount !== 0 && likeCount}
          </span>
        ) : (
          <></>
        )}
      </span>
      <span onClick={handleCartClick}>
        <svg
          ref={svg3Ref}
          style={svgStyles}
          className={infoIconStyles.icon}
          onMouseOver={() => {
            svg3Ref.current.style.fill = "red";
          }}
          onMouseLeave={() => {
            svg3Ref.current.style.fill = svgStyles ? "black" : "white";
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <title>Cart header icon</title>
          <path d="M0.6,0.7C0.3,0.7,0,0.8,0,1.1s0.1,0.6,0.6,0.6l0,0h1c0.1,0,0.1,0.1,0.1,0.1L4.2,10c0.3,0.7,0.9,1.2,1.6,1.2H12c0.7,0,1.3-0.6,1.6-1.2L15,4.7c0.1-0.3-0.1-0.6-0.4-0.6h-0.1H3.6L2.8,1.7l0,0c0-0.7-0.6-1-1.2-1H0.6zM6.1,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.4,0,1-0.6,1-1C7.2,12.8,6.7,12.2,6.1,12.2zM11.7,12.2c-0.6,0-1,0.6-1,1c0,0.4,0.6,1,1,1c0.6,0,1-0.6,1-1C12.7,12.8,12.3,12.2,11.7,12.2z" />
        </svg>
  
      </span>
    </div>
  );
};

export default InfoIcons;
