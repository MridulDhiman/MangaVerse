import React from 'react'
import Login from './Login';
import Register from "./Register";


import accountStyles from "./AccountDetails.module.css";

export default function AccountDetails({onSignIn}) {
  return (
    <div className={accountStyles.acc}>
        <Login onSignIn={onSignIn}/>
        <Register/>
    </div>
  )
}
