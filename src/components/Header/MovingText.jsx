import React from "react";

import textStyles from "./MovingText.module.css"

const MovingText = ()=> {
return <div className={textStyles['text-container']}>
    <span className={textStyles.text}><strong>7.5% Cashback</strong> on all Prepaid Order</span>
</div>
}


export default MovingText;
