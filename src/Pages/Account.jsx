import React, {useState, useEffect} from 'react'

import {auth} from "../config/firebase";
import { signOut } from 'firebase/auth';

import Dashboard from '../components/Account/Dashboard';
import AccountDetails from '../components/Account/AccountDetails';


export default function Account() {
const [isSignedIn, setIsSignedIn] = useState(false);

const user = auth.currentUser;
useEffect(()=> {
if(user) {
setIsSignedIn(true);
}
}, [])



  const onSignOut = () => {
setIsSignedIn(false);
signOut(auth);
  }

  const onSignIn = () => {
    setIsSignedIn(true);
  }

  return (
    <>
    {!isSignedIn ?  <div style={{padding: "2rem 0",width: "100%", background: "white", filter:"contrast(97%)"}}>
      <AccountDetails onSignIn={onSignIn} />
      </div> : <Dashboard user={user} setSignedOut={onSignOut}/>
    }
    </>

  )
}
