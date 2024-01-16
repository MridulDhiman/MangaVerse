import React from 'react'



import registerStyles from "./Register.module.css";
import formStyles from "./Form.module.css"

export default function Register() {
  return (
    <div className={registerStyles.register}>
        <div style={{fontSize: "1.2em",fontFamily : "'Bungee', sans-serif"}}>REGISTER</div>
        <form className={formStyles.form}>
          <label htmlFor={"username"} className={formStyles.label}>Email address *</label>
            <input className={formStyles.input} type="text" id="username"></input>
            <label htmlFor={"pass"} className={formStyles.label}>Password *</label>
            <input className={formStyles.input} type="password" id="pass"></input>
            <button className={formStyles.btn}>REGISTER</button>           
        </form>
        </div>
  )
}
