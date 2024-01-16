import React, { useState, useContext, useEffect } from "react";
import SideDrawerCheckBox from "./SideDrawerCheckBox";
import { FilterContext } from "../../Context/SideDrawerContext";

const ACCORDION_STYLES = {
  display: "flex",
  gap: "12rem",
  cursor: "pointer",
  alignItems: "center",
  fontFamily: `"Dosis", sans-serif`,
  fontWeight: "bold",
};

const SideBarItem = ({ content, ind }) => {
  const { selectedIndices } = useContext(FilterContext);
  console.log("Selected indices: ", selectedIndices);

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
      {content.map((item, index) => {
        return (
          <SideDrawerCheckBox
            ind1={ind - 1}
            key={index}
            ind2={index}
            heading={item.type}
            hasCount={true}
            count={item.count}
          />
        );
      })}
    </div>
  );
};

export default function SideBarAccordion({
  heading,
  isOpen,
  index,
  productContent,
  animeContent,
  onClick,
}) {
  return (
    <>
      <div style={ACCORDION_STYLES} onClick={() => onClick(index)}>
        <div style={{width: "10rem"}}>{heading}</div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen &&
        (index === 0 ? (
          "Filter By Price"
        ) : index === 1 ? (
          <SideBarItem ind={1} contentType="product" content={productContent} />
        ) : (
          <SideBarItem ind={2} contentType="anime" content={animeContent} />
        ))}
    </>
  );
}
