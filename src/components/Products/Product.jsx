import React, { useRef, useState, useEffect } from "react";
import { NavLink, redirect } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { increment, decrement } from "../../store/slices/likes";
import { useDispatch } from "react-redux";

import Ratings from "./Ratings";
import productStyles from "./Product.module.css";
import Sizes from "./Sizes";

export default function Product({ item, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const styleRef = useRef(null);
  const style2Ref = useRef(null);
  const styleImgContentRef = useRef(null);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  //library hooks
  const dispatch = useDispatch();

  const handleSvgClick = (e) => {
    setIsLiked((liked) => {
      if (liked === false) {
        dispatch(increment());
      }
      if (liked === true) {
        dispatch(decrement());
      }
      return !liked;
    });
  };

  return (
    <div className={productStyles.card}>
      <div
        className={productStyles["img-container"]}
        onMouseOver={() => {
          styleImgContentRef.current.style.color = "#FF3B60";
        }}
        onMouseLeave={() => {
          styleImgContentRef.current.style.color = "black";
        }}
      >
        <NavLink to={item.slug} state={{ item: item }} style={{ all: "unset" }}>
          <img
            src={checked ? item?.hoverImage : item.initialImage}
            ref={style2Ref}
            style={{
              opacity: checked ? "1" : "0.91",
              transition: "opacity .8s",
            }}
            onMouseOver={() => {
              setChecked(true);
            }}
            onMouseLeave={() => {
              setChecked(false);
            }}
            className={productStyles.img}
            alt={item.name}
          ></img>
        </NavLink>

        <div
          className={productStyles["svg-container"]}
          onMouseOver={() => {
            if (!isLiked) styleRef.current.style.fill = "#FF3B60";
          }}
          onMouseLeave={() => {
            if (!isLiked) styleRef.current.style.fill = "black";
          }}
          style={{ transition: "color .8s" }}
          onClick={handleSvgClick}
        >
          {/* <NavLink to="/products" element={<ProductList/>} style={{all:"unset"}}><FcLike style={{height: "1rem", width: "1rem"}} ></FcLike></NavLink> */}
          {isLiked ? (
            <FcLike style={{ height: "1rem", width: "1rem" }}></FcLike>
          ) : (
            // <NavLink to="/products" element={<ProductList/>} style={{all:"unset"}}><FcLike style={{height: "1rem", width: "1rem"}} ></FcLike></NavLink>
            <svg
              className={productStyles.svg}
              ref={styleRef}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 15 15"
              aria-label="Wishlist header icon"
            >
              <path
                d="M7.5,13.9l-0.4-0.3c-0.2-0.2-4.6-3.5-5.8-4.8C0.4,7.7-0.1,6.4,0,5.1c0.1-1.2,0.7-2.2,1.6-3c0.9-0.8,2.3-1,3.6-0.8&#10;&#9;C6.1,1.5,6.9,2,7.5,2.6c0.6-0.6,1.4-1.1,2.4-1.3c1.3-0.2,2.6,0,3.5,0.8l0,0c0.9,0.7,1.5,1.8,1.6,3c0.1,1.3-0.3,2.6-1.3,3.7&#10;&#9;c-1.2,1.4-5.6,4.7-5.7,4.8L7.5,13.9z M4.2,2.7C3.6,2.7,3,2.9,2.5,3.3c-0.6,0.5-0.9,1.2-1,1.9C1.4,6.1,1.8,7,2.4,7.8&#10;&#9;c0.9,1,3.9,3.4,5.1,4.3c1.2-0.9,4.2-3.3,5.1-4.3c0.7-0.8,1-1.7,0.9-2.6c-0.1-0.8-0.4-1.4-1-1.9l0,0c-0.6-0.5-1.5-0.7-2.3-0.5&#10;&#9;C9.3,3,8.6,3.5,8.2,4.2L7.5,5.4L6.8,4.2C6.4,3.5,5.7,3,4.9,2.8C4.7,2.8,4.4,2.7,4.2,2.7z"
              />
            </svg>
          )}
        </div>

        <NavLink to={item} state={{item: item}} style={{ all: "unset" }}>
          <div
            className={productStyles["img-content-container"]}
            ref={styleImgContentRef}
          >
            <p className={productStyles.margin}>{item.name}</p>

            {item.allSizesAvailable ? (
              <></>
            ) : (
              <p className={`${productStyles.sizeChart}`}>
                {item.availableSizes.map((size, index) => {
                  return <Sizes size={size} key={index} />;
                })}
              </p>
            )}

            <p className={productStyles.margin}>
              {<Ratings flag={isMounted} defaultRating={item.avgRating} />}
            </p>
          </div>
        </NavLink>
      </div>

      <div className={productStyles["price-container"]}>
        <div>
          <span className={productStyles.actualPrice}>
            {" "}
            $ {item.price.toFixed(2)}
          </span>{" "}
          <span className={productStyles.discountedPrice}>
            {" "}
            {item.hasDiscount && (
              <s>${item.discountedPrice.toFixed(2)}</s>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
