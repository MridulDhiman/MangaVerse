import React from 'react';



import linkTypeStyles from "./LinksType.module.css";
export default function LinksType({heading, items}) {
const listItems = items.map((item, index) => <li className={linkTypeStyles['list-item']} key={index}>{item}</li>);
  return (
    <div className={linkTypeStyles['list-container']}>
        <p>{heading}</p>
        <ul className={linkTypeStyles.list}>
            {listItems}
        </ul>
    </div>
  )
}
