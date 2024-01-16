import React from 'react'
import {FcGoogle} from "react-icons/fc";
import { IconContext } from 'react-icons/lib';
import {auth, googleProvider} from "../../config/firebase";
import { signInWithPopup } from 'firebase/auth';



import loginStyles from "./Login.module.css";
import formStyles from "./Form.module.css";
export default function Login({onSignIn}) {
  const signInWithGoogle = async () => {
try {
  await signInWithPopup(auth, googleProvider);
  onSignIn();
}
catch(err) {
  console.error(`This is my message: ${err.message}`);
}
  }
  return (
    <div className={loginStyles.login}>
        <div style={
          {
            fontSize: "1.2em",
            fontFamily : "'Bungee', sans-serif"
            }}>LOGIN</div>
        <form className={formStyles.form}>
          <label
           htmlFor={"username2"} 
           className={formStyles.label}>
            Username or Email address *
            </label>
            <input
             className={formStyles.input}
              type="text" 
              id="username2"></input>
            <label
             htmlFor={"pass2"} 
             className={formStyles.label}>
              Password *</label>
            <input 
            className={formStyles.input} 
            type="password" 
            id="pass2"></input>

            <div>Login With: <br/> 
            <IconContext.Provider value={{size: "2.5em"}}>
            <FcGoogle onClick={signInWithGoogle} style={{cursor: "pointer",border:"1px solid blueviolet"}}/>
            </IconContext.Provider>
            </div>
            <div>
            <input 
            type="checkbox" 
            id="check" 
            className={formStyles.check}></input>
            <label
             htmlFor={"check"} 
             style={{color:"black", fontWeight: "500"}}> Remember me</label>
            </div>
            
            <button className={formStyles.btn}>LOG IN</button>
            <a href="">Lost your password?</a>
            
        </form>
    </div>
  )
}
