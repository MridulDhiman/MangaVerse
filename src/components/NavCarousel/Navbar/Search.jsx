import React from "react";
import ReactDOM from "react-dom";

import searchhStyles from "./Search.module.css";
import SearchOverlay from "./SearchOverlay";

const Search = ({ searchStyles}) => {

    return <SearchOverlay className={searchhStyles.search} searchStyles={searchStyles} />;

}

export default Search;