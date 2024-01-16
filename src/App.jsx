//importing library functions
import React, { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";

//importing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavCarousel/Navbar/Navbar";

// importing context
import { FilterContextProvider } from "./Context/SideDrawerContext";

//importing styles
import appStyles from "./App.module.css";
import { getCartItems } from "./http";
import { useDispatch } from "react-redux";
import { initializeCart } from "./store/slices/cart";
import { useQuery } from "@tanstack/react-query";
const NavBarStyles = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "0 3rem",
  height: "5rem",
  color: "black",
  position: "relative",
  background: "white",
  boxShadow: "0px 0px 0px white",
  // boxShadow: "0px 56px 42px -8px rgba(0,0,0,0.1)",
  zIndex: "0",
  borderBottom: "0.5px solid lightgrey",
};

const svgStyles = {
  fill: "black",
};

const searchStyles = {
  display: "flex",
  padding: "0.6rem 0.5rem",
  borderRadius: "4px",
  marginRight: "0.3rem",
  fontFamily: "'Dosis', sans-serif",
  background: "white",
  border: "1px solid lightgrey",
};

const App = () => {
  const location = useLocation();
const dispatch = useDispatch();


const {data} = useQuery({
  queryKey: ['cart'],
  queryFn:() => getCartItems(),
  staleTime: 10000
});


useEffect(()=> {
  if(data) {
    console.log(data);
    dispatch(initializeCart(data));
  }
}, [data]);


  return (
    <>
      <FilterContextProvider>
        <div className={appStyles.container}>
          <Header />
          {location.pathname !== "/" && (
            <Navbar
              flag={true}
              svgStyles={svgStyles}
              styles={NavBarStyles}
              searchStyles={searchStyles}
            />
          )}
          <Outlet />
          <Footer />
        </div>
      </FilterContextProvider>
    </>
  );
};

export default App;


