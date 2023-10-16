import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter}  from "react-router-dom";
import TrackOrder from './Pages/TrackOrder.jsx';
import Coupons from './Pages/Coupons.jsx';
import Help from './Pages/Help.jsx';
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [{
      path: "/",
      element: <Home/>
   },
   {
    path: "track-order",
    element: <TrackOrder/>
   },
   {
    path: "contact",
    element: <Help/>
   },
  {
    path: "offers-discount-coupon",
    element: <Coupons/>
  }
  , {
    path : "products",
    element: <Products/>
  }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
)
