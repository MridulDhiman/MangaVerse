import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import TrackOrder from "./Pages/TrackOrder.jsx";
import Coupons from "./Pages/Coupons.jsx";
import Help from "./Pages/Help.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Account from "./Pages/Account.jsx";
import ProductItem, {
  loader as productLoader,
} from "./components/Products/ProductItem/ProductItem.jsx";
import CartPage from "./Pages/CartPage.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import store from "./store/index.js";


import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    // App or Root Layout
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage/>
      }
      ,
      {
        path: "checkout",
        children: [
          {
            path: ":status", 
            element: <CheckoutPage/>
          }
        ]
   
      }
      ,
      {
        path: "track-order",
        element: <TrackOrder />,
      },
      {
        path: "contact",
        element: <Help />,
      },
      {
        path: "offers-discount-coupon",
        element: <>Coupon and Offers</>,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          }, 
          {
            path: ":productId",
            loader: productLoader,
            element: <ProductItem />,
          }
        ]
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);



const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
);
